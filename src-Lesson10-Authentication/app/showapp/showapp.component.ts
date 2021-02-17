import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';
import { DataStorageService } from './data-storage.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showapp',
  templateUrl: './showapp.component.html',
  styleUrls: ['./showapp.component.css']
})
export class ShowappComponent implements OnInit {

  public paramsDataSpecial;
  token: string;

  constructor(
    private authService:AuthService,
    private http:HttpClient,
    private datastorageService:DataStorageService,
    private route:ActivatedRoute) { 

      /* //----------------------------- EXTRACTING PARAMS DATA FROM NAVIGATOR EXTRAS -----------------------------------------
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.paramsDataSpecial = JSON.parse(params.special);
        //console.log('TOKEN FROM PARAMS :: ' + JSON.stringify(this.paramsDataSpecial));
        this.token = this.paramsDataSpecial.token;
        console.log('ttookkeenn :: ' + this.token);
      }else{
        console.log('NO TOKEN FROM NAVIGATOR EXTRAS...');
      }
    });
    //----------------------------- EXTRACTING PARAMS DATA FROM NAVIGATOR EXTRAS ----------------------------------------- */

    //----------------------------- EXTRACTING PARAMS DATA FROM NAVIGATOR EXTRAS -----------------------------------------
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.paramsDataSpecial = JSON.parse(params.special);
        //console.log('myname FROM PARAMS :: ' + JSON.stringify(this.paramsDataSpecial));
        
        //String..................
        
        let myname = this.paramsDataSpecial.myname;
        console.log('myname :: ' + myname); 
       
        //String..................

        //Array....................
        /* let myname = [];
        myname = this.paramsDataSpecial;
        console.log(myname);
        for(let i=0;i<myname.length;i++){
          console.log('----> : '+myname[i].myname);
        } */
        //Array....................
      }else{
        console.log('NO PARAMS FROM NAVIGATOR EXTRAS...');
      }
    });
    //----------------------------- EXTRACTING PARAMS DATA FROM NAVIGATOR EXTRAS -----------------------------------------

  }//CONSTRUCTOR ENDS

  ngOnInit() {
  }

  public recipes:Recipe[];

/*   private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ]; */

  storeRecipes() {
    //-------------------------------------------------------
     this.recipes= [
      new Recipe(
        'Tasty Dum Biryani',
        'A super-tasty Schnitzel - just awesome ones!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];
    //-------------------------------------------------------
    this.datastorageService.storeRecipes(this.recipes)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
      //no need to unscribe this observable as we will get only one observable and angular will clear it for us
  }


  /* {
    "rules": {
      ".read": "true",
      ".write": "true"
    }
  }

  {
    "rules": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  } */

  getRecipes() {
    const token = this.authService.getToken();
    alert('getRecipes - token 1111 : '+token);
    let recipes: Recipe[];

    //WITH TOKEN
    //this.http.get('https://angular-ng-http-b6f44.firebaseio.com/recipes.json?auth=' + token)

    //WITHOUT TOKEN
    this.http.get('https://angular-ng-http-b6f44.firebaseio.com/recipes.json')    
    .pipe(
      map(responseData => {
        console.log('responseData showappComponent : '+responseData);
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {            
            postsArray.push({ ...responseData[key]});           
          }
        }
        this.recipes = postsArray;
      })
    ).subscribe(()=>{
    })
    
    
    /* .subscribe(
      //(response: Response)=>this.recipes = response.json(),
      (response: Response)=>{
        this.recipes = response.json();
        console.log(this.recipes);
      },
      (error)=>console.log(error)       
   ); */



    /*   
    .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          console.log(response.json());
           for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          } 
          return recipes;
        }
      ) */
      /*  .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
       */
  }

}
