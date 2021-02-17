import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',//<!-- calling component as an attribute -->
  //selector: '.app-servers',//<!-- calling component as a class -->
  selector: 'app-servers',//<!-- calling component as a selector -->
   /* template: `
     <app-server></app-server>
     <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Sam123';
  cnt = 1;

  constructor() {
 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  

  onCreateServer() {
    this.cnt = this.cnt+1;
    this.serverCreationStatus = 'Server was created!';
    //this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  callMe(){
    console.log('u call me...');
    return false;
  }
}
