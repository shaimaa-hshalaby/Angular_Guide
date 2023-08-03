import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { validateEmployeeCodeWithParameter } from './custom.validators';

@Component({
  selector: 'app-custom-validation-with-parameters-demo',
  templateUrl: './custom-validation-with-parameters-demo.component.html',
  styleUrls: ['./custom-validation-with-parameters-demo.component.css']
})
export class CustomValidationWithParametersDemoComponent {

  form:FormGroup
  fb:FormBuilder

  constructor(fb:FormBuilder){
    this.fb = fb
  }


  ngOnInit(): void {
    this.form = this.fb.group({
        personalInfo :this.fb.group({
          'employeeName': ['',[Validators.required,Validators.minLength(4)]],
          'employeeCode':['',[Validators.required,validateEmployeeCodeWithParameter('HP')]]
        })
    })
  }

  onSubmit(){
    console.log(this.form)
  }


  ngDoCheck(){
    console.log(this.form)
  }


}
