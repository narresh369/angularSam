import { Injectable } from '@angular/core';
//import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* 
    firebase.google.com
    abhhay.uzwall@getMaxListeners.com
    yourpasswod
    realtime database:data
    'https://angular-ng-http-b6f44.firebaseio.com/data.json',
     */ 


@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    //POST REQUEST
 /*     return this.http.post('https://angular-ng-http-b6f44.firebaseio.com/data.json',
       servers,
       {headers: headers}); */

       //PUT REQUEST
    return this.http.put('https://angular-ng-http-b6f44.firebaseio.com/data.json',
      servers,
      {headers: headers});
     
  } 

  getServers(){  
    return this.http.get('https://angular-ng-http-b6f44.firebaseio.com/data.json')    
    /* .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            
            postsArray.push({ ...responseData[key], id: responseData[key].id });

            //YOU CAN TRANSFORM THE RETURNED RESPONSE DATA
            //postsArray.push({ ...responseData[key], id: responseData[key].id,name:'Fetched_'+responseData[key].name });
          }
        }
        return postsArray;
      })
    ) */
   /*  .subscribe(posts => {
      // ...
      console.log(posts);
    }); */
  //--------------------------------------------------------------------------
  }
  getAppName() {
    return this.http.get('https://angular-ng-http-b6f44.firebaseio.com/appName.json')
     /*  .map(
      (response: Response) => {
        console.log('-----> :: '+response.json());
          return response.json();
        }
      ); */
      //-----------------------------------------------------
      //-----------------------------------------------------
  }
}
