import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { AppService } from '../../core';

@Component({
  selector: 'app-create-plans',
  templateUrl: './create-plans.component.html',
  styleUrls: ['./create-plans.component.scss']
})

export class CreatePlansComponent implements OnInit{
  
  public form: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AppService: AppService
  ) { }

  ngOnInit() {
  }

}
