import { Component,
         Input, 
         OnInit, 
         OnChanges,
         SimpleChanges } from '@angular/core';
import { Server } from '../shared/Server.module';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{
  @Input('srvElement') element:Server;

  constructor(){
    console.log("inside serverElementComponent constructor");
  }

  ngOnInit(): void {
    console.log("inside serverElementComponent onInit");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("inside serverElementComponent ngOnChanges");
    console.log(changes);
  }
}
