import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpg',
  templateUrl: './firstpg.component.html',
  styleUrls: ['./firstpg.component.css']
})
export class FirstpgComponent implements OnInit {

  constructor() { 
    console.log('inside first page');
  }

  ngOnInit(): void {
  }

}
