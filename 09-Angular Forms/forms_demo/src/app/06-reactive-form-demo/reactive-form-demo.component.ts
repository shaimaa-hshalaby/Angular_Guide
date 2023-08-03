import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit{

  genders:string[]=['male','female']
  signupForm:FormGroup;

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      username: new FormControl(null,[Validators.required,Validators.minLength(4)]),
      // email: new FormControl(null,[Validators.email,Validators.required]),
      email: new FormControl(null),
      gender: new FormControl('female')
    })
    this.signupForm.get('email')?.setValidators([Validators.email,Validators.required])
  }

  submitForm(){
    console.log(this.signupForm)
  }

}
