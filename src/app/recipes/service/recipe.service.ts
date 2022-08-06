import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/model/ingredient.model';
import { Recipe } from 'src/model/recipe.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'An other Test Recipe',
      'This is simply a test',
      'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public recipeSelected = new EventEmitter<Recipe>();

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
