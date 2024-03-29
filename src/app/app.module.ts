import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from '@core/guards/auth.guard';
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
import { NetworkInterceptor } from '@core/interceptors/network.interceptor';
import { SubjectsComponent } from './components/subjects/subjects.component';

import { MainComponent } from './layout/main/main.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

registerLocaleData(localeFr, 'fr');

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
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, SharedModule],
  exports: [],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule {}
