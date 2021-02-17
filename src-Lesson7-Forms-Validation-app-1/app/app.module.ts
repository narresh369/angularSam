import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './app.simpleform';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidations';

@NgModule({
  declarations: [
    AppComponent,
    // Declare the three components as part of the root NgModule
    SimpleFormComponent,
    ComplexFormComponent,
    FormValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
