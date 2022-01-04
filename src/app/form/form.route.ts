import { Routes } from '@angular/router';

import { FORM_REACTIVE_ROUTE } from './form-reactive/form-reactive.route';
import { FORM_TEMPLATE_ROUTE } from './form-template/form-template.route';


export const FORM_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'form-reactive',
        pathMatch: 'full'
      },
      ...FORM_REACTIVE_ROUTE,
      ...FORM_TEMPLATE_ROUTE
    ]
  }
];
