import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[]=[];
  @Output() onRecipeSelectedEvent:EventEmitter<Recipe>=new EventEmitter();

  
  constructor(){
    this.recipes.push(new Recipe("Testing Recipe1","A simple Testing Recipe1111","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"));
  this.recipes.push(new Recipe("Testing Recipe2","A simple Testing Recipe2222","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"));
  }

  onRecipeSelected(recipeSelected:Recipe){
    this.onRecipeSelectedEvent.emit(recipeSelected);
  }

}
