import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Navigation } from '../shared/nav.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() onNavigate = new EventEmitter<Navigation>();

  constructor() { }

  ngOnInit() {
  }

  onNavigateToRecipes() {
    console.log('navigate to recipes');
    this.onNavigate.emit(Navigation.Recipes);
  }

  onNavigateToShoppingList() {
    console.log('navigate to shopping list');
    this.onNavigate.emit(Navigation.ShoppingList);
  }
}
