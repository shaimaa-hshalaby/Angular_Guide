import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styles:['span{"background-color":"yellow";}']
})
export class TwoWayBindingComponent {

  spanWidth:number = 100

}
