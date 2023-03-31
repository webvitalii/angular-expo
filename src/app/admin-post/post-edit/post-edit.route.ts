import { Routes } from '@angular/router';
import { PostEditComponent } from './post-edit.component';

export const POST_EDIT_ROUTE: Routes = [
  {
    path: ':post_id/edit',
    component: PostEditComponent
  }
];
