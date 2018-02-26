import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { GeneralService } from './general.service';
import { Router } from '@angular/router';
import { CreateUser } from '../index';


@Injectable()
export class UserService {
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService,
    private gs: GeneralService,
    private router: Router,
  ) { }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('')
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
    this.router.navigateByUrl('/home');
  }

  purgeAuth() {
    debugger;
    this.jwtService.destroyToken();
    this.router.navigateByUrl('/authentication/signin');
  }

  attemptAuth(url: string, credentials: any): Observable<User> {
    credentials['company'] = this.gs.GetCurrentCompany()['Com_ID'];
    return this.apiService.Loginpost(url, credentials)
      .pipe(map(
        data => {
          if (data['access_token'] !== null && data['access_token'] !== '') {
            this.setAuth(data['access_token']);
          } else {
            alert('Usuario y/o contraseña incorrectos');
          }
          return data;
        }
      ));
  }

  getCurrentUser(): any {
    return this.getApiUser().subscribe((rsp) => {
      return rsp;
    });
  }

  getApiUser(): any {
    return this.apiService.get('account/GetUserDeatil')
      .pipe(map(
        data => {
          return data;
        })
      );
  }

  isLooged(): Observable<boolean> {
    return this.apiService.get('account/IsLogged')
      .map(data => {
        return data;
      });
  }

  update(user): Observable<any> {
    return this.apiService
      .put('/user', { user })
      .pipe(map(data => {
        //this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

  getMenuItems(): Observable<any> {
    return this.apiService
      .get('account/GetUserMenu').map(data => { return data; });
  }

  createUser(url: string, rq: CreateUser): Observable<boolean> {
    return this.apiService
      .post(url, rq).map(data => { return data; })
  }
}

