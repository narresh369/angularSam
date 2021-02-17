import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpg',
  templateUrl: './secondpg.component.html',
  styleUrls: ['./secondpg.component.css']
})
export class SecondpgComponent implements OnInit {

  constructor() { 
    console.log('inside 2nd page');
  }

  ngOnInit(): void {
  }

}
