import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {

  form:FormGroup
  hobbiesArray:FormArray

  ngOnInit(): void {
    this.form = new FormGroup({
      personalInfo : new FormGroup({
          firstName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
          lastName: new FormControl(null,[Validators.minLength(2)]),
          email: new FormControl(null,[Validators.required,Validators.email])
      }),
      additionalInfo: new FormGroup({
          // create an empty form array 
          hobbies: new FormArray([])
      })
    })

    this.hobbiesArray = this.form.get('additionalInfo.hobbies') as FormArray
  
  }

  onAddHobbies(){
    let control = new FormControl(null,Validators.required);
    this.hobbiesArray.push(control)
  }

  onSubmit(){
    console.log(this.form)
  }

  removeFromHobbies(index:number){
    this.hobbiesArray.removeAt(index)
  }

}
