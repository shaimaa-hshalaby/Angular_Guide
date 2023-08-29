import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
  <h1>{{messageHeader}}</h1>
  <p>{{messageBody}}</p>
  `
})
export class ChildComponentComponent {

  @Input() 
    set messageHeader(messageHeader:string){
      this._messageHeader = messageHeader;
    }
    get messageHeader(){
      return this._messageHeader
    }
    private _messageHeader:string=''

  @Input('msgBody') 
  set messageBody(messageBody:string){
    this._messageBody = messageBody;
  }
  get messageBody(){return this._messageBody}
  private _messageBody:string='';

}
