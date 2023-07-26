import { Component } from '@angular/core';

@Component({
  selector: 'app-template-statement',
  templateUrl: './template-statement.component.html'
})
export class TemplateStatementComponent {
    counter:number = 0;

    // +1 btn click event handler
    increaseCounter(){
      this.counter++;
    }

    // -1 btn click event handler
    decreaseCounter(){
      this.counter--;
    }

    // reset btn click event handler
    reset(){
      this.counter=0;
    }
}
