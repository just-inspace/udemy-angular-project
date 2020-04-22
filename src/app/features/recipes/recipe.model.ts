import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {

  constructor(
    public name: string,
    public desc: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) { }
}
