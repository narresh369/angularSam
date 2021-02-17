import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService:AuthService){};
  title = 'app';


  //firebase.google.com.....goto console....angular-ng-http is the project name
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCVNh5d2eqcE1Sha6b926XQAc-JbZfNH0w",
      authDomain: "angular-ng-http-b6f44.firebaseapp.com"
    });
  }

  onLogout(){
    this.authService.logout();
  }
}
