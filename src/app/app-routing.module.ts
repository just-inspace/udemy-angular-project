import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './features/recipes/recipes.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipePlaceholderComponent } from './features/recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from './features/recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: 'new', component: RecipeEditComponent }, // THE ORDER HERE MATTERS
      { path: ':index', component: RecipeDetailComponent },
      { path: ':index/edit', component: RecipeEditComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
