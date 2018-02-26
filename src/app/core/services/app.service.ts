import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
//import { CreateMenuComponent } from '../../menu/create-menu/create-menu.component';
import { CreateMenu } from '../index';

@Injectable()
export class AppService {

    constructor(
        private apiService: ApiService
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
        debugger;
        return this.apiService
          .post(url, rq).map(data => { return data; })
      }

}
