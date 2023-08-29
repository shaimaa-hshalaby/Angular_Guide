import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, tap, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../authentication/user.model';


interface AuthenticationRequest{
  email:string,
  password:string,
  returnSecureToken:boolean
}

interface AuthenticationResponse{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
  registered?:boolean
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticatedUserSubject:BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null)
  constructor(private http:HttpClient) { }

  signup(email:string,password:string){
      let signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
      let request:AuthenticationRequest = {
        email:email,
        password:password,
        returnSecureToken:true
      }
      return this.http.post(signupUrl,request)
                      .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse)))
    }

  login(email:string,password:string){
    let loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`
    let request:AuthenticationRequest = {
      email:email,
      password:password,
      returnSecureToken:true
    }
    return this.http.post<AuthenticationResponse>(loginUrl,request)
                    .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse))
                    ,tap( response => this.shareAndStoreUserData(response))
                    )
                    
  }

  private shareAndStoreUserData(response:AuthenticationResponse){
   
    let expirationDate = new Date(new Date().getTime() + +response.expiresIn*1000)
    let userData = new User(response.email,response.localId,response.idToken,expirationDate)
    this.authenticatedUserSubject.next(userData)
    localStorage.setItem('userData',JSON.stringify({
      email:userData.email,
      id:userData.id,
      token:userData.token,
      tokenExpirationDate:userData.tokenExpirationDate.toString()
    }))
  }

  private handleErrors(errorResponse:HttpErrorResponse){
    console.log(errorResponse)
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(() => new Error("an error has been occured"))
    }
    console.log(errorResponse.error.error.message)
    switch(errorResponse.error.error.message){
      case "EMAIL_EXISTS":
        return throwError(() => new Error("The Email already exists"))
      case "EMAIL_NOT_FOUND":
        return throwError(() => new Error("The Email is not found"))
      case  "INVALID_PASSWORD":
        return throwError(() => new Error("invalid password"))
      default:
        return throwError(() => new Error("an error has been occured"))
    }
  }

}
