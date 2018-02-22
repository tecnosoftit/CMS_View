import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'docs',
    loadChildren: './docs/docs.module#DocsModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'menu',
    loadChildren: './menu/menu.module#MenuModule'
  }, {
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
},
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'plans',
    loadChildren: './plans/plans.module#PlansModule'
  }, {
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
},{
  path: '**',
  redirectTo: 'error/404'
}];

