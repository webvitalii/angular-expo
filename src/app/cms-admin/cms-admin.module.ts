import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { AuthService } from './services/auth.service';

const routesAdmin: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: '/admin/posts', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin), SharedModule],
  exports: [RouterModule],
  declarations: [LayoutAdminComponent],
  providers: [AuthService]
})
export class CMSAdminModule {}
