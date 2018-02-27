import { Routes } from '@angular/router';

import { CreatePlansComponent } from './create-plans/create-plans.component';

export const PlansRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'createplans',
        component: CreatePlansComponent
      },
    ]
    //component: PlansComponent,
    //data: {
    //  heading: 'Plans'
    //}
  }];
