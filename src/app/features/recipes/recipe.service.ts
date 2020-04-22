import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pea Soup',
      'Delicious, warm, dutch soup',
      'https://i1.pickpik.com/photos/169/660/950/pea-soup-soup-starter-soup-bowls-preview.jpg',
      [
        new Ingredient('Split peas', 1),
        new Ingredient('Ham', 1)
      ]),
    new Recipe('Pea Soups', 'Delicious, warm, dutch soup', 'https://i1.pickpik.com/photos/169/660/950/pea-soup-soup-starter-soup-bowls-preview.jpg', [
      new Ingredient('Split peas', 1),
      new Ingredient('Ham', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // Maintain privacy
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
