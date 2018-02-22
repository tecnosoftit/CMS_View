import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu.component';
import { MenuRoutes } from './menu.routing';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MenuRoutes), NgbAccordionModule],
  declarations: [MenuComponent]
})

export class MenuModule {}
