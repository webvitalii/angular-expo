import { Routes } from '@angular/router';
import { PostListComponent } from './post-list.component';

export const POST_LIST_ROUTE: Routes = [
  {
    path: 'list',
    component: PostListComponent
  }
];
