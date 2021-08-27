import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExistingRecipe, NewRecipe } from './recipe/model/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = 'http://10.0.1.108:8080';
  private recipeUrl = 'api/v1/recipes';

  constructor(private readonly httpClient: HttpClient) { }

getRecipes(): Observable<ExistingRecipe[]> {
  return this.httpClient.get<ExistingRecipe[]>(`${this.baseUrl}/${this.recipeUrl}`)
}

getRecipe(id: number): Observable<ExistingRecipe> {
  return this.httpClient.get<ExistingRecipe>(`${this.baseUrl}/${ this.recipeUrl }/${ id }`);
}

addRecipe(recipe: NewRecipe): Observable<ExistingRecipe> {
  return this.httpClient.post<ExistingRecipe>(`${this.baseUrl}/${ this.recipeUrl }`, recipe)
}

deleteRecipe(id: number): Observable<void>{
  return this.httpClient.delete<void>(`${this.baseUrl}/${ this.recipeUrl }/${ id }`);
}
}
