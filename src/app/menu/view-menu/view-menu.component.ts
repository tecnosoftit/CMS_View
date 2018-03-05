import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { AppService } from '../../core';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.scss']
})

export class ViewMenuComponent implements OnInit {

  public menu: any[] = [];
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private AppService: AppService
  ) { }


  ngOnInit() {
    debugger
    this.form = this.fb.group({
      id: [],
    });

    this.AppService.getMenu(0).subscribe((response) => {
      this.menu = response;
      debugger
    });
  }

  onSubmit() {
    this.AppService.getMenu(this.form.value.id).subscribe((response) => {
      this.menu = response;
    });
  }

}
