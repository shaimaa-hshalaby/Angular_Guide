import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-emulated',
  template: `<p>paragraph inside ViewEncapsulationEmulatedComponent</p>`,
  styles: [
    `
     p {
        background-color: pink;
     }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})

export class ViewEncapsulationEmulatedComponent {

}
