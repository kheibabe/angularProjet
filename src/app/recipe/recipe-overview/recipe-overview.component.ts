import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MOCK_RECIPES } from '../mock/recipe.mock';
import { ExistingRecipe } from '../model/recipe.model';


@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit, OnChanges {

  recipeList: ExistingRecipe[] = MOCK_RECIPES;
  showIngredients = false;

  @Input()
  recipe!: ExistingRecipe;

  @Output()
  delete = new EventEmitter<number>();


  seeMore() {
    this.showIngredients = true;
  }


  constructor(
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.recipe);
  }

  deleteRecipe(): void {
    this.delete.emit(this.recipe.id);
  }

}
