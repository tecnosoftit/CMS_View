import { Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'signin',
      component: SigninComponent
    }, {
      path: 'forgot',
      component: ForgotComponent
    }]
  }
];
