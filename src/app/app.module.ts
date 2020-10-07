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
    StylesDirective
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
