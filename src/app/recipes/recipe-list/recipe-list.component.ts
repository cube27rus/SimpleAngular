import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Borsh', 'Russish dinner', 'https://cdn.lifehacker.ru/wp-content/uploads/2014/12/ob-05-1024x512.png'),
    new Recipe('Borsh', 'Russish dinner', 'https://cdn.lifehacker.ru/wp-content/uploads/2014/12/ob-05-1024x512.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
