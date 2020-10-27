import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { CMSSharedModule } from '../cms-shared/cms-shared.module';

const routesAdmin: Routes = [
  {
    path: '', component: LayoutAdminComponent, children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'post-create', component: PostCreateComponent, canActivate: [AuthGuard] },
      { path: 'post-edit/:id', component: PostEditComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesAdmin),
    FormsModule,
    ReactiveFormsModule,
    CMSSharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LayoutAdminComponent,
    LoginComponent,
    DashboardComponent,
    PostEditComponent,
    PostCreateComponent,
    LogoutComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CMSAdminModule {

}
