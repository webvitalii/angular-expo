import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { FORM_ROUTE } from './form.route';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';


@NgModule({
  declarations: [
    FormReactiveComponent,
    FormTemplateComponent
  ],
  imports: [
    RouterModule.forChild(FORM_ROUTE),
    SharedModule
  ]
})
export class FormModule { }
