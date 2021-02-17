import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './app.simpleform';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidation';
import { LoginComponent } from './app.login'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
