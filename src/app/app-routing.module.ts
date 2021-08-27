import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAddComponent } from './recipe/recipe-add/recipe-add.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

const routes: Routes = [
  {
      path: 'recipes',
      component: RecipeListComponent,
      pathMatch: 'full'
  },
  {
  path: 'recipes/new',
  component: RecipeAddComponent,
  pathMatch: 'full'
},
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'
},

  {
      path: '**',
      redirectTo: 'recipes',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
