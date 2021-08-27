import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';
import { ExistingRecipe, NewRecipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

@Injectable()

export class RecipeDetailComponent implements OnInit {

  currentRecipe: ExistingRecipe | null = null;

  constructor(
    private readonly recipeService: RecipeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.getRecipe(id);
  }

  getRecipe(id: number): void {
    this.recipeService.getRecipe(id)
      .subscribe(
        (result: ExistingRecipe) => {
          this.currentRecipe = result;
        },
        (error) => {
          console.log(error);
        });
  }

}
