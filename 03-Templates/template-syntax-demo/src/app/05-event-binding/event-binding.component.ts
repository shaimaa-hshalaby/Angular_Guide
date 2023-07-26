import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent {

  clickCounter:number=0;

  onBtnClicked(){
      this.clickCounter++;
  }

}
