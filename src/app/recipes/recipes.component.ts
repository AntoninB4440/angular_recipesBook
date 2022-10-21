import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/model/recipe.model';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
