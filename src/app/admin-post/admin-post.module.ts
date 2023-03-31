import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ADMIN_POST_ROUTE } from './admin-post.route';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [PostListComponent, PostCreateComponent, PostEditComponent, PostFormComponent],
  imports: [RouterModule.forChild(ADMIN_POST_ROUTE), SharedModule]
})
export class AdminPostModule {}
