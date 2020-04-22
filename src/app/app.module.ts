import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListService } from './features/shopping-list/shopping-list.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipePlaceholderComponent } from './features/recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from './features/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipesComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipePlaceholderComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
