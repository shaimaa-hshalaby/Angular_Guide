import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-setting-form-value-programatically-demo',
  templateUrl: './setting-form-value-programatically-demo.component.html',
  styleUrls: ['./setting-form-value-programatically-demo.component.css']
})
export class SettingFormValueProgramaticallyDemoComponent {

  setForm(form:NgForm){
    form.setValue({
      fName: 'Shaimaa',
      lName: 'Shalaby',
      email: 'shaimaa@gmail.com',
      bio:'teeeeeeeeeeeeeeeeeest'
    })
  }

  patchValueToForm(submittedForm:NgForm){
    submittedForm.form.patchValue({
      bio:'Java, Spring and Angular Instructor'
    })
  }

}
