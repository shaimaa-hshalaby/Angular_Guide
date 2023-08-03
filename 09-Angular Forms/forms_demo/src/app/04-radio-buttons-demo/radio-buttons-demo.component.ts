import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-radio-buttons-demo',
  templateUrl: './radio-buttons-demo.component.html',
  styleUrls: ['./radio-buttons-demo.component.css']
})
export class RadioButtonsDemoComponent {

  genders:string[] = ['Male','Female']
  selectedGender:string

  onSubmit(form:NgForm){

  }

}
