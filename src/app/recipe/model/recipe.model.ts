import { RecipeIngredient } from './recipe-ingredient.model';

export interface NewRecipe {
  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}

export interface ExistingRecipe extends NewRecipe {
  id: number;
}
