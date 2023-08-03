import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-ngform-properties-demo',
  templateUrl: './ngform-properties-demo.component.html',
  styleUrls: ['./ngform-properties-demo.component.css']
})
export class NgformPropertiesDemoComponent {

  onSubmit(form:NgForm){
      console.log(form)
  }

}
