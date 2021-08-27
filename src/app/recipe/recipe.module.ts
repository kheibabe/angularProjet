import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeOverviewComponent,
    RecipeListComponent,
    RecipeAddComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeAddComponent,
  ]
})
export class RecipeModule { }
