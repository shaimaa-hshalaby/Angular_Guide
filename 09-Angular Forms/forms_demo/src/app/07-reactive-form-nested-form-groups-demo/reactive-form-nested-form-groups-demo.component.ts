import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-nested-form-groups-demo',
  templateUrl: './reactive-form-nested-form-groups-demo.component.html',
  styleUrls: ['./reactive-form-nested-form-groups-demo.component.css']
})
export class ReactiveFormNestedFormGroupsDemoComponent implements OnInit {

  form:FormGroup


  ngOnInit(): void {

    this.form = new FormGroup({
      personalInfo : new FormGroup({
          firstName: new FormControl(null,[Validators.required,Validators.minLength(2)]),
          lastName: new FormControl(null,[Validators.minLength(2)]),
          email: new FormControl(null,[Validators.required,Validators.email])
      }),
      address: new FormGroup({
          country: new FormControl(null),
          city: new FormControl(null),
          street: new FormControl(null)
      })
    })
    
  }



}
