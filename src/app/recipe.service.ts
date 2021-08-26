import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe/model/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'http://10.0.1.108:8080';
  private recipeUrl = 'api/v1/recipes';

  constructor(private readonly httpClient: HttpClient) { }

getRecipes(): Observable<Recipe[]> {
  return this.httpClient.get<Recipe[]>(`${this.baseUrl}/${this.recipeUrl}`)
}

getRecipe(id: number): Observable<Recipe> {
  return this.httpClient.get<Recipe>(`${this.baseUrl}/${ this.recipeUrl }/${ id }`);
}
}
