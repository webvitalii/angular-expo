import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { ACCOUNT_ROUTES } from '@app/account/account.route';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forChild(ACCOUNT_ROUTES),
    SharedModule
  ]
})
export class AccountModule { }
