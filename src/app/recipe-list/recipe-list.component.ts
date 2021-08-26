import { Component, OnInit } from '@angular/core';
import { MOCK_RECIPES } from '../recipe/mock/recipe.mock';
import { Recipe } from '../recipe/model/recipe.model';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

@Injectable()

export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [];


  constructor(private readonly recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
  this.recipeService.getRecipes().subscribe(
    (result: Recipe[]) => {
        this.recipeList = result;
    },
    (error) => {
        // Traiter l'erreur
    }
);
  }


  }
