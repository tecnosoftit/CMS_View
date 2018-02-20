import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { GeneralService } from './general.service';


@Injectable()
export class UserService {

  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private looged: boolean = false;
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
    private gs: GeneralService
  ) { }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
        );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(token: string) {
    this.jwtService.saveToken(token);
    this.currentUserSubject.next(this.getApiUser());
    this.isAuthenticatedSubject.next(true);
    this.looged = true;
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as any);
    this.isAuthenticatedSubject.next(false);
    this.looged = false;
  }

  attemptAuth(url: string, credentials: any): Observable<User> {
    credentials['company'] = this.gs.GetCurrentCompany()['Com_ID'];
    return this.apiService.Loginpost(url, credentials)
      .pipe(map(
        data => {
          this.setAuth(data['access_token']);
          return data;
        }
      ));
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  getApiUser(): any {
    return this.apiService.get('account/GetUserDeatil')
      .pipe(map(
        data => { return data; })
      );
  }

  isLooged(): boolean {
    return this.looged;
  }

  update(user): Observable<any> {
    return this.apiService
      .put('/user', { user })
      .pipe(map(data => {
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }
}
