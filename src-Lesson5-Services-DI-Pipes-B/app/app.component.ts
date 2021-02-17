import { Component } from '@angular/core';
import { MyservicediService } from './myservicedi/myservicedi.service';
import { TestserviceService } from './testservice/testservice.service';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[MyservicediService]
})
export class AppComponent {
  title = 'Services and DI';
  heros = [];
  trxns:any;
  testfunctionVal;

  //-------------------------------
  players: Array<{teamId:string,stockid:string,itemname:string,unitprice:string,img_loc:string,date_time:string}>;
  teams: Array<{id:number,name:string}>;  
  //-------------------------------

  birthday:any;

  constructor(
      private http:HttpClient,
      private myservicediService: MyservicediService,
    private testserviceService:TestserviceService) {


    this.testfunctionVal = this.testserviceService.testFunction();

    this.heros = myservicediService.getHeroes();
    //alert(JSON.stringify(this.heros));
    this.getTrxnsListDataX();

    this.birthday = new Date(1988, 3, 15); // April 15, 1988

    //--------------------------
    this.players = [{"teamId":"1","stockid":"21","itemname":"Asafoetida","unitprice":"150.50","img_loc":"img_loc","date_time":"2017-09-16 09:28:43"},{"teamId":"1","stockid":"21","itemname":"Almond oil","unitprice":"150.50","img_loc":"img_loc","date_time":"2017-09-16 09:28:43"},{"teamId":"3","stockid":"15","itemname":"chilli powder","unitprice":"40.00","img_loc":"img_loc","date_time":"2017-09-13 12:23:41"},{"teamId":"3","stockid":"18","itemname":"Chivas Regal wiskey 10 ou","unitprice":"200.00","img_loc":"img_loc","date_time":"2017-09-14 17:14:24"},{"teamId":"3","stockid":"19","itemname":"Chivas Regal wiskey 750ml","unitprice":"2500.00","img_loc":"img_loc","date_time":"2017-09-14 17:14:49"},{"teamId":"4","stockid":"23","itemname":"Dal","unitprice":"25.00","img_loc":"img_loc","date_time":"2017-09-16 10:05:24"},{"teamId":"18","stockid":"24","itemname":"Raagi Malt","unitprice":"130.25","img_loc":"img_loc","date_time":"2017-09-22 12:35:17"},{"teamId":"18","stockid":"17","itemname":"Rice","unitprice":"42.50","img_loc":"img_loc","date_time":"2017-09-14 10:58:24"},{"teamId":"19","stockid":"11","itemname":"Salt","unitprice":"25.00","img_loc":"img_loc","date_time":"2017-09-12 19:32:27"},{"teamId":"19","stockid":"12","itemname":"Sugar","unitprice":"55.25","img_loc":"img_loc","date_time":"2017-09-12 16:22:46"},{"teamId":"20","stockid":"9","itemname":"Tamarind Branded","unitprice":"65.55","img_loc":"img_loc","date_time":"2017-09-12 10:56:58"},{"teamId":"21","stockid":"13","itemname":"Urda dal","unitprice":"110.00","img_loc":"img_loc","date_time":"2017-09-12 19:20:04"},{"teamId":"23","stockid":"14","itemname":"wheat","unitprice":"32.50","img_loc":"img_loc","date_time":"2017-09-12 19:31:30"}];

    this.teams = [
      {
          "id": 1,
          "name": "A"
      },
      {
          "id": 2,
          "name": "B"
      },
      {
          "id": 3,
          "name": "C"
      },
      {
          "id": 4,
          "name": "D"
      },
      {
          "id": 5,
          "name": "E"
      },
      {
          "id": 6,
          "name": "F"
      },
      {
          "id": 7,
          "name": "G"
      },
      {
          "id": 8,
          "name": "H"
      },
      {
          "id": 9,
          "name": "I"
      },
      {
          "id": 10,
          "name": "J"
      },
      {
          "id": 11,
          "name": "K"
      },
      {
          "id": 12,
          "name": "L"
      },
      {
          "id": 13,
          "name": "M"
      },
      {
          "id": 14,
          "name": "N"
      },
      {
          "id": 15,
          "name": "O"
      },
      {
          "id": 16,
          "name": "P"
      },
      {
          "id": 17,
          "name": "Q"
      },
      {
          "id": 18,
          "name": "R"
      },
      {
          "id": 19,
          "name": "S"
      },
      {
          "id": 20,
          "name": "T"
      },
      {
          "id": 21,
          "name": "U"
      },
      {
          "id": 22,
          "name": "V"
      },
      {
          "id": 23,
          "name": "W"
      },
      {
          "id": 24,
          "name": "X"
      },
      {
          "id": 25,
          "name": "Y"
      },
      {
          "id": 26,
          "name": "Z"
      }
  ];


    //--------------------------
  }

      //----------------------------------------------------------------------------------------------
      getTrxnsListDataX() {
    this.myservicediService.getTrxnsList().subscribe(    
      data1 => { 
          //const data = data1.json();
          console.log(' DATA ARRIVED : '+JSON.stringify(data1));
         
         // this.trxns = data1.json();
         this.trxns = data1;
      },
      err => console.error(err),
      () => console.log('done loading stock list 2222222222222222222')
    );
    
    }
    //-------------------------------------------------
  

}
