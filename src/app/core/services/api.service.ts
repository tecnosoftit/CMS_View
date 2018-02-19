import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../app.config';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    debugger;
    return new ErrorObservable(error.json());
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${APP_CONFIG.apiBaseUrl}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${APP_CONFIG.apiBaseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${APP_CONFIG.apiBaseUrl}${path}`, body
    ).pipe(catchError(this.formatErrors));
  }

  Loginpost(path: string, body: Object = {}): Observable<any> {
    let bd = new HttpParams()
    .set('grant_type', 'password')
    .set('username', body['user'] + '|' + body['company'])
    .set('password', body['password']);
    debugger;
    return this.http.post(
      `${APP_CONFIG.apiBaseUrl}${path}`, bd
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${APP_CONFIG.apiBaseUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }

}
