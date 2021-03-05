// TODO: Remove module in favor of SharedModule
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '@shared/shared.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    SharedModule
  ],
  exports: [
    MatProgressSpinnerModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ]
})
export class CMSSharedModule {

}
