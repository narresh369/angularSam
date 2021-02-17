import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyservicediService } from './myservicedi/myservicedi.service';
import { MultiplierPipe } from './multiplierpipe/multiplier.pipe';
import { ArrayFilterPipe } from './multiplierpipe/array-filter.pipe';
import { TestserviceService } from './testservice/testservice.service';
import { TestcomponentComponent } from './testcomponent/testcomponent/testcomponent.component';
import { LoggingService } from './logging.service';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MultiplierPipe,
    ArrayFilterPipe,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MyservicediService, TestserviceService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
