import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountModule } from '@app/account/account.module';
import { StyleGuideModule } from '@app/style-guide/style-guide.module';
import { CMSModule } from '@app/cms/cms.module';
import { CMSAdminModule } from '@app/cms-admin/cms-admin.module';
import { HomeComponent } from './components/home/home.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpComponent } from './components/http/http.component';
import { ErrorComponent } from './components/error/error.component';
import {AnimationModule} from '@app/animation/animation.module';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  /* {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: PostsComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  }, */
  {
    path: '',
    loadChildren: () => CMSModule
  },
  {
    path: 'account',
    loadChildren: () => AccountModule
  },
  {
    path: 'admin',
    loadChildren: () => CMSAdminModule
  },
  {
    path: 'style-guide',
    loadChildren: () => StyleGuideModule
  },
  {
    path: 'animation',
    loadChildren: () => AnimationModule
  },
  { path: 'home', component: HomeComponent },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-reactive', component: FormReactiveComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'http', component: HttpComponent },
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page Not Found'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
