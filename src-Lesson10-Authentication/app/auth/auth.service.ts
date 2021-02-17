import { Router, NavigationExtras } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          
          //this.router.navigate(['/']);
          
          ////this.router.navigate(['showapp']);
          
          
          //firebase.auth().currentUser.getToken()
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                console.log(token);
                //to check the token details go to https://jwt.io/  and accroding to HS256 algorithm
                //eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlMmJmYjIwYzg1YjZkYzJiYmY4NGE4NmNkN2ViMmMwNDcwMTc3ZWIifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYW5ndWxhci1uZy1odHRwLWI2ZjQ0IiwiYXVkIjoiYW5ndWxhci1uZy1odHRwLWI2ZjQ0IiwiYXV0aF90aW1lIjoxNTA3NjQzODA1LCJ1c2VyX2lkIjoienFxNVY4czRKb1o4SnBta2FTSDFTQ0R6REM3MyIsInN1YiI6InpxcTVWOHM0Sm9aOEpwbWthU0gxU0NEekRDNzMiLCJpYXQiOjE1MDc2NDM4MDUsImV4cCI6MTUwNzY0NzQwNSwiZW1haWwiOiJ2ZW5rYXRkYWRhMzY5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2ZW5rYXRkYWRhMzY5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.BbgtPqhXQB8kY18ZQqeMPJwTZaUn8YKzzWGpQRBvfry7IrlTfSsGxCe-yCGAUoJOfUu-oG2wzJ9sUt9Qa8HLm4MtdOVIeJ-ych75P0u1ITiDCxva4nub3QhChQPAhN68npDFEsLfHHI48KCKVcN4NrCxFi3kBRfmTY_Q-CMA22eL4J6bF0O7q_V3FvpONKdZa_eVZfeh5yYHbzanU68izUh5Efxei8KTP_zWNCLGC5qLJob-9xXzaEkcesknhE_Llq86QkhKQLtddSxGVXlOqRPagcpIzKPBDxbzfUGjU6ZKPRrMIJPBNblWwjBpuFQr2MTQpvTmboIVbn8eyTD06w

                 /*  //-------------------------------------------
                  let params = { "token": this.token };
                  let navigationExtras: NavigationExtras = {
                  queryParams: {
                  special: JSON.stringify(params)
                  }
                  };
                  this.router.navigate(['showapp'],navigationExtras);
                  //------------------------------------------- */

                  //-------------------------------------------
                  
                  //String....................
                  let params = { "myname": "Narresh Gudimetlaa" };
                  //String....................

                  //Array....................
                  //let params = [{ "myname": "Narresh Gudimetlaa" },{ "myname": "Uzwall" }];
                  //Array....................

                  let navigationExtras: NavigationExtras = {
                  queryParams: {
                  special: JSON.stringify(params)
                  }
                  };
                  this.router.navigate(['showapp'],navigationExtras);
                  
                  //-------------------------------------------
              }
            )
        }
      )
      .catch(
        error => {
          console.log(error);
          this.router.navigate(['errorpage']);
        }
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    //firebase.auth().currentUser.getToken()
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  /* getToken() {    
    return this.token;
  } */

  isAuthenticated() {
    return this.token != null;
  }
}
