import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Menu } from '../models';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { GeneralService } from './general.service';
import { Router } from '@angular/router';


@Injectable()
export class MenuService {

    constructor(
        private menuService: MenuService,
        private http: HttpClient,
        private jwtService: JwtService,
        private gs: GeneralService,
        private router: Router,
    ) { }

    addMenu(menu:Menu){
        let json = JSON.stringify(menu);
        let params = 'json='+json;
        let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

        //return this.http.post(this.menuService+'menu',params)
        //                .map(res => res.json());
    }

}