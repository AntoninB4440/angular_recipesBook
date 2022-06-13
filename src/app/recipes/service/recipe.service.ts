import { EventEmitter } from '@angular/core';
import { Recipe } from 'src/model/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'
    ),
    new Recipe(
      'An other Test Recipe',
      'This is simply a test',
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'
    ),
  ];

  public recipeSelected = new EventEmitter<Recipe>();

  public getRecipes() {
    return this.recipes.slice();
  }
}
