import { Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';

export const AccountRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'createuser',
      component: CreateUserComponent
    },]
  }
];
