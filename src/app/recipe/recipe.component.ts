import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MOCK_RECIPES } from './mock/recipe.mock';
import { Recipe } from './model/recipe.model';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {

  recipeList: Recipe[] = MOCK_RECIPES;
  showIngredients = false;

  @Input()
  recipe!: Recipe;

  seeMore() {
    this.showIngredients = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.recipe);
  }

}
