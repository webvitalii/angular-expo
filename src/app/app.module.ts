import { NgModule, Provider } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// TODO: Move to CoreModule
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { DirectivesComponent } from './components/directives/directives.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { HttpComponent } from './components/http/http.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { WrapperPipe } from './components/pipes/wrapper.pipe';
import { SwitchComponent } from './components/switch/switch.component';
import { TodosComponent } from './components/todos/todos.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HiliteDirective } from './directives/hilite.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { StylesDirective } from './directives/styles.directive';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { AuthInterceptor } from './cms-admin/services/auth.interceptor';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

registerLocaleData(localeFr, 'fr');


const AUTH_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    ErrorComponent,
    ObservablesComponent,
    PipesComponent,
    WrapperPipe,
    HttpComponent,
    HiliteDirective,
    DirectivesComponent,
    StylesDirective,
    SwitchComponent,
    IfnotDirective,
    ViewerComponent,
    FilterPipe,
    FilterListPipe,
    PaginationComponent,
    PaginationPipe,
    FilterDatePipe,
    HighlightPipe,
    HomeComponent,
    TodosComponent,
    SubjectsComponent,
    MainComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  exports: [],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [MainComponent]
})
export class AppModule { }
