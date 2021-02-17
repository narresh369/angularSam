import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirdpg',
  templateUrl: './thirdpg.component.html',
  styleUrls: ['./thirdpg.component.css']
})
export class ThirdpgComponent implements OnInit {

  constructor() { 
    console.log('inside 3rd page');
  }

  ngOnInit(): void {
  }

}
