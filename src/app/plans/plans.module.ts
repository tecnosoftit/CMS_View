import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlansComponent } from './create-plans/create-plans.component';
import { PlansRoutes } from './plans.routing';
import { AppComponent } from '../app.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PlansRoutes), NgbAccordionModule],
  declarations: [CreatePlansComponent]
})

export class PlansModule { }
