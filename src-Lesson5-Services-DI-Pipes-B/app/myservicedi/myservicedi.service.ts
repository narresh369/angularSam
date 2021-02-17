import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Rx';
import {Observable} from 'rxjs/';
//import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Injectable(/* {
  providedIn:'root'
} */)
export class MyservicediService {

  heros = [{name:"ramesh"},{name:"ganesh"},{name:"Raju"},{name:"Gopi"},{name:"Peter"},{name:"John"}];

  //constructor(private http:Http) { }
  constructor(private http:HttpClient) { }

  getHeroes(){
    return this.heros;
  }

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      getTrxnsList() {
        //return this.http.get('http://www.eteleapps.com/Narresh/stockbilling/getTrxnsList.php').map((res:Response) => res.json());        
        //return this.http.get('http://www.eteleapps.com/Narresh/stockbilling/getTrxnsList.php');

        return this.http.get('https://jsonplaceholder.typicode.com/todos');
        
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}
