import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  /* styles:[`    
      .online{
      color:cyan;
    }
    `] */
    //styleUrls:['./server.component.css']
    styleUrls:['../servers/servers.component.css','./server.component.css']
})
export class ServerComponent{

  /* STRING INTERPOLATION EXAMPLE */
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor(){
    //this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    let x = Math.random();
    console.log(x);
    this.serverStatus = x > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

 
}
