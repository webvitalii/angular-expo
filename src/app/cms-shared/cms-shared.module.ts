import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HttpClientModule,
    MatProgressSpinnerModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ]
})
export class CMSSharedModule {

}
