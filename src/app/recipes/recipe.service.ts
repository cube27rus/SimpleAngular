import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Borsh',
         'Russian dinner', 
         'https://cdn.lifehacker.ru/wp-content/uploads/2014/12/ob-05-1024x512.png',
        [
            new Ingredient('potato', 2),
            new Ingredient('carrot', 4),
            new Ingredient('meat', 1),
        ]),
        new Recipe('Gamburger',
         'From Hamburg', 
         'https://www.maggi.ru/data/images/recept/img564x436/recept_5112_h7z3.jpg',
        [
            new Ingredient('salat', 2),
            new Ingredient('meat', 1),
            new Ingredient('bread', 2),
        ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.slice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}