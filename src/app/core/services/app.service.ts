import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';

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
}


