import { Component, OnInit, DoCheck} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { validateEmployeeCode } from './custom.validators';

@Component({
  selector: 'app-custom-validation-demo',
  templateUrl: './custom-validation-demo.component.html',
  styleUrls: ['./custom-validation-demo.component.css']
})
export class CustomValidationDemoComponent implements OnInit, DoCheck {

  form:FormGroup
  fb:FormBuilder

  constructor(fb:FormBuilder){
    this.fb = fb
  }


  ngOnInit(): void {
    this.form = this.fb.group({
        personalInfo :this.fb.group({
          'employeeName': ['',[Validators.required,Validators.minLength(4)]],
          'employeeCode':['',[Validators.required,validateEmployeeCode]]
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
