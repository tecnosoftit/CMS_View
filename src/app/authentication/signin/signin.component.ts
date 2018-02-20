import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { UserService } from '../../core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }


  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])], password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.userService
      .attemptAuth('login', { user: this.form.value.uname, password: this.form.value.password })
      .subscribe(
      data => { }, err => {
        alert('Usuario y/o contraseña incorrectos');
      });
  }
}
