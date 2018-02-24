import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { AppService } from '../../core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public roles: any[] = [];
  public form: FormGroup;

  constructor(
    private AppService: AppService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    debugger;
    this.AppService.GetRoles().subscribe((response) => {
      this.roles = response;
    })
  }
}
