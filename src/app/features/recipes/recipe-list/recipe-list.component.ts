import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pea Soup', 'Delicious, warm, dutch soup', 'https://i1.pickpik.com/photos/169/660/950/pea-soup-soup-starter-soup-bowls-preview.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
