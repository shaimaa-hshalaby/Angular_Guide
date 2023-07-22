import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddList:number[]=[];
  evenList:number[]=[];

  onOddIncrementListener(oddList:number[]){
    console.log(oddList)
    this.oddList = oddList;
  }
  
  onEvenIncrementListener(evenList:number[]){
    console.log(evenList)
    this.evenList = evenList;
  }

  onIncrementIntervalListener(num:number){
    if(num%2 ===0 ){
      this.evenList.push(num);
    }else{
      this.oddList.push(num);
    }
  }



}
