import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { user } from '../../core/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'c',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: user;

  constructor() {}

  ngOnInit() {
  this.resetForm();
  }
  resetForm(form? : NgForm){
    if (form != null)
    form.reset();
    this.user = {
      Username: '',
      Email: '',
      Password: '',
      FistName: '',
      Company:''
    }

  }
}
