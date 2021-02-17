import { Injectable } from '@angular/core';

//import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';

import 'rxjs/Rx';

/* import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model'; */
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              //private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes(recipes) {
    const token = this.authService.getToken();
    alert('TOKEN : '+token);
    return this.http.put('https://angular-ng-http-b6f44.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

/*   getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://angular-ng-http-b6f44.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  } */
}
