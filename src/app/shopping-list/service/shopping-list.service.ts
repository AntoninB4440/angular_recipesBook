import { Subject } from 'rxjs';
import { Ingredient } from 'src/model/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Oignon', 1),
    new Ingredient('Beans', 10),
  ];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
