import { Routes } from '@angular/router';
import { POST_LIST_ROUTE } from './post-list/post-list.route';
import { POST_CREATE_ROUTE } from './post-create/post-create.route';
import { POST_EDIT_ROUTE } from './post-edit/post-edit.route';

export const ADMIN_POST_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      ...POST_LIST_ROUTE,
      ...POST_CREATE_ROUTE,
      ...POST_EDIT_ROUTE
    ]
  }
];
