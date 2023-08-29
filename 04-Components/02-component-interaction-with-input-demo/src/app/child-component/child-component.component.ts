import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
  <h1>{{messageHeader}}</h1>
  <p>{{messageBody}}</p>
  `
})
export class ChildComponentComponent {

  @Input() messageHeader:string=''
  @Input('msgBody') messageBody:string='';

}
