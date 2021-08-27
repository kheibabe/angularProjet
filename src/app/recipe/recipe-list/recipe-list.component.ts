import { Component, Injectable, OnInit } from '@angular/core';
import { ExistingRecipe } from '../model/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

@Injectable()

export class RecipeListComponent implements OnInit {

  recipeList: ExistingRecipe[] = [];


  constructor(private readonly recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
  this.recipeService.getRecipes().subscribe(
    (result: ExistingRecipe[]) => {
        this.recipeList = result;
    },
    (error) => {
        console.log(error);
    }
);
  }

 deleteRecipe(id: number): void {
  this.recipeService.deleteRecipe(id)
  .subscribe(
    response => {
      this.getRecipes();
    },
    error => {
      console.log(error);
    });
 }


  }
