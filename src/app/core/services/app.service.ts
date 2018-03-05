import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { CreateMenu } from '../index';

@Injectable()
export class AppService {

    constructor(
        private apiService: ApiService,
        private http: HttpClient
    ) { }

    GetRoles() {
        return this.apiService
            .get('/cms/getrole')
            .pipe(map(data => {
                return data;
            }));
    }
    GetCompany() {
      return this.apiService
          .get('/cms/getcompany')
          .pipe(map(data => {
              return data;
          }));
  }
    createMenu(url: string, rq: CreateMenu): Observable<boolean> {
        return this.apiService
          .post(url, rq).map(data => { return data; })
      }
    
    getMenu(id): Observable<any> {
        return this.apiService        
            .get('/cms/getmenu/'+id)
            .pipe(map(data => {
                return data;
            }));
    }

}
