import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { MenuRoutes } from './menu.routing';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(MenuRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateMenuComponent, ViewMenuComponent],
  providers: []
})

export class MenuModule {}
