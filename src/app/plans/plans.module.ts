import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { PlansComponent } from './plans.component';
import { PlansRoutes } from './plans.routing';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(PlansRoutes), NgbAccordionModule],
  declarations: [PlansComponent]
})

export class PlansModule {}
