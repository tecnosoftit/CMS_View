import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { AppService, ApiService } from '../../core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public roles: any[] = [];
  public form: FormGroup;
public companies: any[] = [];
  constructor(
    private AppService: AppService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private ApiService :ApiService
  ) { }

  ngOnInit() {
    this.AppService.GetRoles().subscribe((response) => {
      this.roles = response;

    });
    this.AppService.GetCompany().subscribe((Response)=> {
      this.companies = Response;
      console.log(this.companies);
    });


    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      company: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      role: [null, Validators.compose([Validators.required])],
      birthday: [null, Validators.compose([Validators.required])],
      SurName: [null, Validators.compose([Validators.required])],
      Phone: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit() {
    debugger;
    this.userService
      .createUser('account/CreateUser', {
        FistName: this.form.value.name,
        Password: this.form.value.password,
        Birthday: this.form.value.birthday,
        CompanyId: this.form.value.company,
        Email: this.form.value.email,
        Phone: this.form.value.Phone,
        Roles: this.form.value.role,
        SurName: this.form.value.SurName,
      })
      .subscribe(
      data => { }, err => {
        alert('Error creando usuario');
      });
  }
}
