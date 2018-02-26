import { Routes } from '@angular/router';

import { CreateMenuComponent } from './create-menu/create-menu.component';

export const MenuRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'createmenu',
        component: CreateMenuComponent
      },
    ]
    //component: MenuComponent,
    //data: {
     //heading: 'Menu'
    //}
  }];
