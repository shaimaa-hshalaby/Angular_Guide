import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  names:string[] = []

  handleNewNameAdded(name:string){
    this.names.push(name)
  }

}
