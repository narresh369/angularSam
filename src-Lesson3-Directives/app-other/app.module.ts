import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivetypesComponent } from './directivetypes/directivetypes.component';
import { MycustomDirective } from './mycustom/mycustom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivetypesComponent,
    MycustomDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
