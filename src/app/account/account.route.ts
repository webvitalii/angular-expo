import { Routes } from '@angular/router';

import { LOGIN_ROUTE } from './login/login.route';
import { LOGOUT_ROUTE } from './logout/logout.route';

export const ACCOUNT_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      ...LOGIN_ROUTE,
      ...LOGOUT_ROUTE
    ]
  }
];
