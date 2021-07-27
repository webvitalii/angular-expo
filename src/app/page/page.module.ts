import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '@shared/shared.module';
import {LongPollingComponent} from './long-polling/long-polling.component';
import {PAGE_LONG_POLLING_ROUTE} from './long-polling/long-polling.route';


@NgModule({
  declarations: [
    LongPollingComponent
  ],
  imports: [
    RouterModule.forChild(PAGE_LONG_POLLING_ROUTE),
    SharedModule
  ]
})
export class PageModule {
}
