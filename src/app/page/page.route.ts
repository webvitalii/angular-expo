import {Routes} from '@angular/router';

import {PAGE_LONG_POLLING_ROUTE} from './long-polling/long-polling.route';


export const PAGE_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'long-polling',
        pathMatch: 'full'
      },
      ...PAGE_LONG_POLLING_ROUTE
    ]
  }
];
