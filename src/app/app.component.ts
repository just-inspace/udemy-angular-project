import { Component } from '@angular/core';

import { Navigation } from './shared/nav.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRecipesPage = false;
  isShoppingListPage = true;

  handleNavigation(page: Navigation) {
    if (page === Navigation.Recipes) {
      this.isRecipesPage = true;
      this.isShoppingListPage = false;
    }
    if (page === Navigation.ShoppingList) {
      this.isRecipesPage = false;
      this.isShoppingListPage = true;
    }
  }
}
