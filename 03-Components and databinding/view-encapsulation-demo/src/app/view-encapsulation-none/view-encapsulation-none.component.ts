import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  template: `<h1>heading inside the view-encapsulation-none component</h1>`,
  styles: [
    `
     h1 {
        background-color: yellow;
     }
    `
  ],
  encapsulation:ViewEncapsulation.None
})
export class ViewEncapsulationNoneComponent {

}
