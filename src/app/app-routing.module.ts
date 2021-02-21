import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

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
    // lazy loading of the module
    loadChildren: () => import('./cms/cms.module').then(m => m.CMSModule)
  },
  {
    path: 'admin',
    // lazy loading of the module
    loadChildren: () => import('./cms-admin/cms-admin.module').then(m => m.CMSAdminModule)
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
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules // lazy loading of the modules
    ,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
