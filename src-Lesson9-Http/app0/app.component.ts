import { Component } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { ServerService } from './server.service';

import { Server } from './models/server/server.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  server = {} as Server;    
 
  appName = this.serverService.getAppName();

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService) {

  }

  
  //------------- WITHOUT USING INTERFACE ---------------------- 
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });  
  }
//------------- WITHOUT USING INTERFACE ---------------------- 
//------------- USING INTERFACE ----------------------  
  onAddServerNew(name: string) {    
    this.server.name  = name;
    this.server.capacity  = 250;
    this.server.id  = this.generateId();

    this.servers.push(this.server);  
  }
    //------------- USING INTERFACE ----------------------


  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      //no need to unscribe this observable as we will get only one observable and angular will clear it for us
  }
  

  onGet() {    
      this.serverService.getServers().subscribe(
        (servers:any[])=>
        {
          console.log(this.servers);
          this.servers = servers;
          console.log(this.servers);
        },
        (error)=>console.log(error)       
     );
      
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  //=====================================================
  
}
