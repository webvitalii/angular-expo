import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostCreateComponent } from './components/post-create/post-create.component';

const routesAdmin: Routes = [
  {
    path: '', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'post-create', component: PostCreateComponent },
      { path: 'post-edit/:id', component: PostEditComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAdmin)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LayoutAdminComponent,
    LoginComponent,
    DashboardComponent,
    PostEditComponent,
    PostCreateComponent
  ]
})
export class CMSAdminModule {

}
