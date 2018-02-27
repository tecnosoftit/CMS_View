import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlansComponent } from './create-plans/create-plans.component';
import { PlansRoutes } from './plans.routing';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PlansRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreatePlansComponent],
  providers: []
})

export class PlansModule { }
