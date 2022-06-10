import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Tomato", 5),
    new Ingredient("Oignon", 1),
    new Ingredient("Beans", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
