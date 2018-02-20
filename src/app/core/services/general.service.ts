import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralService {
  private currentCompany = new BehaviorSubject<any>({} as any);
  constructor(
    private apiService: ApiService
  ) { }

  public GetCompanyProperties(url: string): Observable<any> {
    return this.apiService.post('generalpurpose/getcompanyinformation', { Url: url })
      .map((data) => {
        if (data === null || data === '' || Object.keys(data).length === 0) {
          data = {
            Com_ID: '842FEFCA-E1C3-415B-919E-A5E5A1D4AC99',
            Com_name: 'TECNOSOFT IT S.A.S',
            Com_description: 'Empresa jeisson y Omar Internal Desc',
            Com_url: url
          }
        }
        this.currentCompany = data;
      });
  }

  public GetCurrentCompany(): any {
    return this.currentCompany;
  }
}
