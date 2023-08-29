import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() newNameAdded = new EventEmitter<string>()

  addNewName(name:string){
    this.newNameAdded.emit(name)
  }
}
