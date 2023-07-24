import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html'
})

export class ParentComponentComponent {
  headerMsg:string='Header Value from the parent'
  bodyMsg:string='Body value from the parent'

}
