// TODO: Remove module in favor of SharedModule
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ]
})
export class CMSSharedModule {

}
