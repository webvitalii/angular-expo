import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

const routesAdmin: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: '/admin/posts', pathMatch: 'full' },
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'post-create', component: PostCreateComponent, canActivate: [AuthGuard] },
      { path: 'post-edit/:id', component: PostEditComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin), SharedModule],
  exports: [RouterModule],
  declarations: [LayoutAdminComponent, PostsComponent, PostEditComponent, PostCreateComponent],
  providers: [AuthService, AuthGuard]
})
export class CMSAdminModule {}
