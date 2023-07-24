import { Component } from '@angular/core';

@Component({
  selector: 'app-on-init-component',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.css']
})
export class OnInitComponent {
  
  constructor(){
    console.log("[OnInitComponentComponent] inside the constructor")
  }
  ngOnInit(): void {
    console.log("[OnInitComponentComponent] inside ngOnInit hook method")
  }

}
