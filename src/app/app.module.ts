import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorComponent } from './components/error/error.component';

import { ObservablesComponent } from './components/observables/observables.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { WrapperPipe } from './components/pipes/wrapper.pipe';
import { HttpComponent } from './components/http/http.component';
import { HiliteDirective } from './directives/hilite.directive';
import { DirectivesComponent } from './components/directives/directives.component';
import { StylesDirective } from './directives/styles.directive';
import { IfnotDirective } from './directives/ifnot.directive';

import { ViewerComponent } from './components/viewer/viewer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { HomeComponent } from './components/home/home.component';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    FormReactiveComponent,
    FormTemplateComponent,
    NavComponent,
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
