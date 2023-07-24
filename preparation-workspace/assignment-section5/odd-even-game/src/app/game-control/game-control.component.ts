import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter:number;
  interval:any;
  value:number = 30;

  @Output() onIncrementInterval:EventEmitter<number> = new EventEmitter();
  
  constructor(){
    this.counter =0;
  }
  ngOnInit(): void {
  //  this.counter = 0;
  }

  onStartBtnClicked(){
    this.interval = setInterval(()=>{
      
      this.counter++;
      this.onIncrementInterval.emit(this.counter)
    },1000);
  }

  onStopBtnClicked(){
    console.log("stop interval");
    clearInterval(this.interval);
  }

}
