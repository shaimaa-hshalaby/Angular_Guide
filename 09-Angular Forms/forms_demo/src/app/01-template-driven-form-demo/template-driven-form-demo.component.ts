import { Component } from '@angular/core';
import { NgForm,NgModel } from '@angular/forms'

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.css']
})
export class TemplateDrivenFormDemoComponent {
  formSubmitted:boolean = false;
  defaultCountry:string = 'egypt'
  fName:string;
  lName:string;
  email:string;
  bio:string;
  country:string;

  onSubmit(f:NgForm){
    this.formSubmitted = true;
      this.fName = f.value.fName
      this.lName = f.value.lName
      this.email = f.value.email
      this.bio = f.value.bio
      this.country = f.value.country
  }

  sendInput(i:any){
    console.log(i)
  }

  showNgModel(f_name:NgModel){
    console.log(f_name)
  }

}
