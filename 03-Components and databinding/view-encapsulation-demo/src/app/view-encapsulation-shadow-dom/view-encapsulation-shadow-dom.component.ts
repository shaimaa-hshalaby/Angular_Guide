import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-shadow-dom',
  template: `<h2>heading 2 inside the view-encapsulation-shadow-dom component</h2>`,
  styles: [
    `
     h2 {
        background-color: green;
     }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationShadowDomComponent {

}
