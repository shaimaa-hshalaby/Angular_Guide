import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  isLoginMode = false
  errorMsg:string|null = null

  constructor(private authService:AuthenticationService){}

  onSubmit(form:NgForm){
    if(this.isLoginMode){
        this.handleLogin(form)
    }else{
        this.handleSignUp(form)
    }
   
  }

  private handleSignUp(form:NgForm){
    this.authService.signup(form.value.email,form.value.password).subscribe({
      next: (response)=>{console.log(response)}
      ,error: (error) => this.errorMsg = error
    })
  }

  private handleLogin(form:NgForm){
    this.authService.login(form.value.email,form.value.password).subscribe({
      next: (response)=>{console.log(response)}
      ,error: (error) => this.errorMsg = error
    })
  }


}
