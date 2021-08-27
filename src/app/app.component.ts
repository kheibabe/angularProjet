import { Component } from '@angular/core';
import { MOCK_RECIPES } from './recipe/mock/recipe.mock';
import { ExistingRecipe } from './recipe/model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
recipeMock: ExistingRecipe = MOCK_RECIPES[0];
}
