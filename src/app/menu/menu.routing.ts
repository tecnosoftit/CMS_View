import { Routes } from '@angular/router';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

export const MenuRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'createmenu',
        component: CreateMenuComponent
      },{
        path: 'viewmenu',
        component: ViewMenuComponent
      },
    ]
    //component: MenuComponent,
    //data: {
     //heading: 'Menu'
    //}
  }];
