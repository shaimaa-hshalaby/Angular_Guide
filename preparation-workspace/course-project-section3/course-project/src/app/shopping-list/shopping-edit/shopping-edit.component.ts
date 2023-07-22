import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  ingredientName:string='';
  ingredientAmount:number;
  @Output() onIngredientAdded:EventEmitter<Ingredient> = new EventEmitter();

  onAddIngredientBtn(){
    console.log("ingredient name :"+this.ingredientName);
    console.log("ingredient amount :"+this.ingredientAmount);

    this.onIngredientAdded.emit(new Ingredient(this.ingredientName,this.ingredientAmount))

  }

}
