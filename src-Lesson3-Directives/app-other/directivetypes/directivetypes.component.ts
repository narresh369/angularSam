import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetypes',
  templateUrl: './directivetypes.component.html',
  styleUrls: ['./directivetypes.component.css']
})
export class DirectivetypesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  //---------------------------------------------
//set a property that holds a random color for our style.
randomcolor=this.getRandomColor();
//declare the fontsize and background color properties
public font_size="12px";
public background_color="grey ";

//declare a variable to hold class name:
public my_Class = 'style1';

isClass1Visible: false;
isClass2Visible: false;

//function to get random colors
public getRandomColor(){
 var letters = '0123456789ABCDEF'.split('');
 var color = '#';
 for (var i = 0; i < 6; i++){
     color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}

//function to set a new random collor
setColor(){
 this.randomcolor=this.getRandomColor();
}

//function to change the class from style1 to style 2 when clicked
toggle_class(){
 if(this.my_Class=="style1"){
   this.my_Class='style2';
 }else{
   this.my_Class='style1';
 }
}
//-------------------------------------------------------

//shouldHide = true;
shouldHide = false;

//ngIf example
//showSection = true;
showSection = false;

//ngFor Example
items = [
  {name:'John',age:45},
  {name:'Peter',age:44},
  {name:'Samuel',age:32},
  {name:'Anna',age:40}
];


//ngSwitch
person = 'Mohan';
ids = [1,2,3,4];

}
