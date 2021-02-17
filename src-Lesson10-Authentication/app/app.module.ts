import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { ShowappComponent } from './showapp/showapp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DataStorageService } from './showapp/data-storage.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ShowappComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
