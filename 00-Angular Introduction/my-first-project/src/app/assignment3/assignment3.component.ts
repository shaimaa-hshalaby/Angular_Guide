import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {

   clicked = false;
   counter =0;
   clicks:Date[]=[];

   onClickBtn(){
    this.clicked = !this.clicked;
    this.counter++;
    this.clicks.push(new Date());
   }

  
}
