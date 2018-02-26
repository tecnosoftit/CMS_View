import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core/src/metadata/ng_module';

//import { MenuService } from '../../core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})

export class PlansComponent implements OnInit{
  
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
