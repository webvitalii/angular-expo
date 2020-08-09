import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FormReactiveComponent },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
