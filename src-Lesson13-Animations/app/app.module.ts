import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FirstpgComponent } from './firstpg/firstpg.component';
import { AppRoutingModule } from './app.routing.module';
import { SecondpgComponent } from './secondpg/secondpg.component';
import { ThirdpgComponent } from './thirdpg/thirdpg.component';
import { FourthpgComponent } from './fourthpg/fourthpg.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpgComponent,
    SecondpgComponent,
    ThirdpgComponent,
    FourthpgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
