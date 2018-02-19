import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GeneralService {
  private currentCompany = new BehaviorSubject<any>({} as any);
  constructor(private apiService: ApiService, ) { }


  public GetCompanyProperties(url: string): any {
    this.apiService.post('generalpurpose/getcompanyinformation', { Url: url })
      .subscribe((data) => {        
        if (data === null || data === '' || Object.keys(data).length === 0) {
          data = {
            Com_ID: '842FEFCA-E1C3-415B-919E-A5E5A1D4AC99',
            Com_name: 'TECNOSOFT IT S.A.S',
            Com_description: 'Empresa jeisson y Omar Internal Desc',
            Com_url: url
          }
        }
        this.currentCompany = data;
        return this.GetCurrentCompany();
      });
  }

  public GetCurrentCompany(): any {
    return this.currentCompany;
  }
}
