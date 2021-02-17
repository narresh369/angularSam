import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-servers',  
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {  
  serverCreated:boolean = false;
  serverName:string = "Test Server";
  //--------------- ngFor directive ---------------
  //servers = ['Test Server1','Test Server2'];
  servers = ['Test Server1'];
  //--------------- ngFor directive ---------------

  constructor() {
  }

  ngOnInit() {
  }

  cnt = 1;

  onCreateServer() {
    //--------------- ngFor directive ---------------
    this.servers.push(this.serverName);
    //--------------- ngFor directive ---------------
    this.cnt = this.cnt+1;
    this.serverCreated = true;
   
  }


}
