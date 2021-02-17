import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs';//USE THIS TO UNLOCK ALL THE RXJS OPERATORS ...eg., map operator
import { Observer } from 'rxjs';
import { Subscription } from 'rxjs';


import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  //TO UNSCRIBE THE OBSERVABLES
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  //TO UNSCRIBE THE OBSERVABLES

  constructor() { }

  ngOnInit() {

    /* 1111111111111111111111111111111111111111111111111111111111 */
    //THIS OBSERVABLE RUNS INFINITELY
    //const myNumbers1 = Observable.interval(1000)
    
    //W O R K I N G
    //CHANGED IN RXJS 6.3.0 ONWARDS
    /* const myNumbers1 = interval(1000)
    this.numbersObsSubscription = myNumbers1.subscribe(
      (number: number) => {
        console.log(number);
      }
    ); */
 
    /* 1111111111111111111111111111111111111111111111111111111111 */


    /* 222222222222222222222222222222222222222222222222222222222 */
    //W O R K I N G
    /* const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');//next emits normal data package
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        //observer.error('this does not work');
        //observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
  
    });
    //------------------------------------------------------
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );  */
 /* 222222222222222222222222222222222222222222222222222222222 */


/* 3333333333333333333333333333333333333333333333333333333333 */
 //TO UNSCRIBE THE OBSERVABLES

      //const myNumbers = Observable.interval(1000)
      //W O R K I N G
      //CHANGED IN RXJS 6.3.0 ONWARDS
      /* const myNumbers = interval(1000)
      myNumbers.subscribe(
        (number: number) => {
          console.log(number);
        }
      ); */ 


//STORING IN SUBSCRIPTION PROPERTY TO UNSCRIBE numbersObsSubscription      
//const myNumbers = Observable.interval(1000);
//W O R K I N G
//CHANGED IN RXJS 6.3.0 ONWARDS
/* const myNumbers = interval(1000);
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    ); */ 
//STORING IN SUBSCRIPTION PROPERTY TO UNSCRIBE numbersObsSubscription   
   




  //YOU CAN MODIFY THE OBSERVABLE VALUE THAT IS EMITTED USING map FUNCTION
    //const myNumbers = Observable.interval(1000)    
    /* const myNumbers = interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      ); */

      //------------------------------------
      //W O R K I N G
      //CHANGED IN RXJS 6.3.0 ONWARDS
      /* const myNumbers = interval(1000).pipe(map((data: number) => {
      return data * 2;
      }
      ));     
      //---------------------------------
      myNumbers.subscribe(
        (number: number) => {
          console.log(number);
        }
      ); */ 
      //YOU CAN MODIFY THE OBSERVABLE VALUE THAT IS EMITTED USING map FUNCTION



       //W O R K I N G
    /* const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        //observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    ); */ 
     //TO UNSCRIBE THE OBSERVABLES
    /* 3333333333333333333333333333333333333333333333333333333333333 */
  }

  ngOnDestroy() {
    //alert('entered ngOnDestroy');
    console.log('entered ngOnDestroy');
     //TO UNSCRIBE THE OBSERVABLES
    //this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe(); 
     //TO UNSCRIBE THE OBSERVABLES
  }

}
