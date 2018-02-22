import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { AppService } from '../core';

//import { MenuService } from '../../core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit{
  
  public roles: any[] = [];
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AppService: AppService
  ) { }

  
  ngOnInit() {
    this.AppService.GetRoles().subscribe((response) => {
      this.roles = response;
    })
  }

}
