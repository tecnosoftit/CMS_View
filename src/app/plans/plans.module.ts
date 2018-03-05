import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePlansComponent } from './create-plans/create-plans.component';
import { PlansRoutes } from './plans.routing';
import { AppComponent } from '../app.component';
import { CreateplanComponent } from './createplan/createplan.component';

@NgModule({
<<<<<<< HEAD
  imports: [CommonModule, RouterModule.forChild(PlansRoutes), NgbAccordionModule],
  declarations: [PlansComponent, CreateplanComponent]
=======
  imports: [
    CommonModule,
    RouterModule.forChild(PlansRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreatePlansComponent],
  providers: []
>>>>>>> 081835fd94b0403133c26504a8e3b498aa2dd032
})

export class PlansModule { }
