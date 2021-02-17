import { Component, OnInit } from '@angular/core';

@Component({  
  //selector: 'app-servers',//<!-- calling component as a selector -->
  //selector: '[app-servers]',//<!-- calling component as an attribute -->
  selector: '.app-servers',//<!-- calling component as a class -->
  

  /* template: `
    <app-server></app-server>
    <app-server></app-server>`, //calling inline */
  templateUrl: './servers.component.html',//calling as an external file with relative path to the file

  styleUrls: ['./servers.component.css']
  
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
