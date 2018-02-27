import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { AppService } from '../../core';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.scss']
})

export class CreateMenuComponent implements OnInit{
  
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
    });
    this.form = this.fb.group({
      name: [""],
      isparent: [false],
      parentid: [null],
      controller: [""],
      view: [""],
      role: [null],
      });
  }

  onSubmit(){
    debugger
    this.AppService
      .createMenu('cms/postmenucreate', {
        MEN_NAME: this.form.value.name,
        MEN_ISPARENT: this.form.value.isparent,
        MEN_PARENTID: this.form.value.parentid,
        MEN_CONTROLLER: this.form.value.controller,
        MEN_VIEW: this.form.value.view,
        MEN_ROLE: this.form.value.role,
      })
      .subscribe(
      data => { 
        alert('Creation complete');
        this.form.reset();
      }, err => {
        alert('Error creating menu');
      });
  }
  selected() {    
    console.log(this.selected);
    debugger
  }

}
