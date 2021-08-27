import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { NewRecipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipe: NewRecipe = {
    name: '',
    picture: '',
    description: '',
    ingredients: [],
    instructions: [],
  };

  submitted = false;

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  saveRecipe(): void {


    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = {
      name: '',
      picture: '',
      description: '',
      ingredients: [],
      instructions: []
    };
    //this.router.navigate

}
}
