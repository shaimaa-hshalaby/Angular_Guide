import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent {
  // @Input() recipeTitle:string ='';
  // @Input() recipeDescription:string='';
  // @Input() recipeImageUrl:string ='';

  @Input() recipe:Recipe;
  @Output() onRecipeClickedEvent:EventEmitter<void> = new EventEmitter();

  onRecipeClicked(){
    this.onRecipeClickedEvent.emit();
  }

}
