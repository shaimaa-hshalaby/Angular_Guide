## Overview
In the upcoming sections of this tutorial, we'll guide you through the process of building a comprehensive authentication module for your Angular applications.
We'll cover the following key aspects:

  1.  Setting up a new Angular project.
  2.  Creating a registration form for user sign-up.
  3.  Implementing a login form for user authentication.
  4.  Enabling user logout functionality.
  5.  Handling token expiration and implementing token refresh.
  6.  Adding route guards to protect authenticated routes.
   
By the end of this tutorial, you'll have a solid understanding of how to integrate user authentication into your Angular applications,
enhancing both security and user experience.

## Preparing the Firebase as a backend for your Authentication module
Firebase provides a robust and scalable platform that simplifies many aspects of backend development, including user authentication.
By the end of this section, you'll have a Firebase project ready to handle user registration, authentication

1. sign up for a Firebase account https://firebase.google.com/
2. click on "Go to console" button on the top header
3. create project and follow the instructions
4. In your Firebase project dashboard, navigate to the "Authentication" section.
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/0cf01477-d710-4c96-9126-2460cc3ced41)
  
5. Enable the sign-up methods you want to support, such as email/password or Google authentication.
6. To Get Firebase Config:
      -  In the Firebase project dashboard, click on the gear icon (Project settings) and select "General."
      -  Scroll down to the "Your apps" section and click on the "Web" icon to add a new web app.
      -  Register the app and Firebase will provide you with a configuration object. Copy this object for later use.

7. Use the Angular CLI to generate environment files for the project. By default, Angular CLI generates the src/environments/environment.ts file for the development environment. To generate an environment file for the production environment, you can use the following command:
    ```
      ng generate environments
    ```
8. open the src/environments/environment.ts file. then Paste the Firebase configuration object obtained in Step 7 inside the firebase property.

    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/32032037-3610-4a0b-90b4-16eb3041c9a8)

## Implementing User Registration/Login
1. User Angular CLI to generate authentication component
   ```
    ng g c authentication
   ```

2. for best practice, generate authenticationService to implement the logic related to the communication with the backend as follows
   ```
     ng g s authentication
   ```

3. create the login/register form in the authentication component template as follows:
     - create boolean property in the *AuthenticationComponent* to switch between the login and register modes
         ```
          export class AuthenticationComponent {
            isLoginMode = false
          }
         ```
       
      - Create form in the Auntentication.component.html file as follows:
         ```
            <form (ngSubmit)="onSubmit(form)" #form="ngForm">
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" name="email" class="form-control" email required ngModel>
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" name="password" class="form-control" email required ngModel>
                  </div>
                  <div class="mt-3">
                      <button class="btn btn-success">{{isLoginMode?'Login':'Signup'}}</button> |
                      <button class="btn btn-primary">Switch to {{!isLoginMode?'Login':'Signup'}}</button>
                  </div>
              </form>
      
         ```
        > for more details about how to create angular form, go to [Angular Forms guide](https://github.com/shaimaa-hshalaby/Angular_Guide/tree/main/09-Angular%20Forms)
          
4. Implment AuthenticationService Signup.
   
    Notice that the endpoint, request body and response body will be changed according to the backend APIs, So the following endpoint, request and response are specific to the firebase

   - The following is a screenshot from the Firebase Authentication documentation for signup API

      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3ba9364d-57b4-4722-9675-5be6cebd2720)

      > you can check the documentation from [here](https://firebase.google.com/docs/reference/rest/auth#section-create-email-password)


   - add a declaration for AuthenticationRequest and AuthenticationResponse as follows:
     
      ```
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
        }
      ```

    - Inject the *HttpClient* into the *AuthenticationService* to be able to send the signup and login requests to the backend
      
      ```
        constructor(private http:HttpClient) { }
      ```

    - Here is the implementation of the signup function to communicate with the firebase authentication module to get a signup observable to subscribe on it in the AuthenticationComponent 
        
      ```
         signup(email:string,password:string){
            let signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`
            let request:AuthenticationRequest = {
              email:email,
              password:password,
              returnSecureToken:true
            }
            return this.http.post(signupUrl,request)
          }
      ```

    - In the authenticationComponent, you must subscribe into the observable returned from the service as follows:
      ```
       onSubmit(form:NgForm){
          if(!this.isLoginMode){
              this.handleSignUp(form)
          }
        }
      
        private handleSignUp(form:NgForm){
          this.authService.signup(form.value.email,form.value.password).subscribe({
            next: (response)=>{
              // handling code
            }
          })
        }
      ```
      > the response is the object recieved from the backend -firebase in our case here

6. Implement AuthenticationService Login

    - Here's a screenshot from the Firebase documentation about the Login API

       ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/6213a060-a526-44cd-8a2c-a6bf3e8feb3a)
  
        > for more details from the documentation, you could check this [link](https://firebase.google.com/docs/reference/rest/auth?hl=en&authuser=0#section-sign-in-email-password)
      

    - From the documentation, you can find that the login response is similar to the signup response unless one property named *registered*, so you can add a change to the AuthenticationResponse interface as follows:
      ```
        interface AuthenticationResponse{
          idToken:string,
          email:string,
          refreshToken:string,
          expiresIn:string,
          localId:string
          registered?:boolean
        }
      ```

    - The implementation of login() method in the *AuthenticationService*
      
      ```
        login(email:string,password:string){
          let loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`
          let request:AuthenticationRequest = {
            email:email,
            password:password,
            returnSecureToken:true
          }
          return this.http.post(loginUrl,request)
        }
      ```  

    - add Loginhandling to the component that is called when the login button is clicked then it subscribes into the login observable returned from the service as follows
      ```
        onSubmit(form:NgForm){
          if(this.isLoginMode){
              this.handleLogin(form)
          }else{
              this.handleSignUp(form)
          }    
        }
      
        private handleLogin(form:NgForm){
            this.authService.login(form.value.email,form.value.password).subscribe({
              next: (response)=>{
                // handling code
              }
            })
        }
      ```

## Registeration and Login Error Handling
In the documentation of the Firebase, you can find the common errors of signup and login as follows

#### Login Common Errors

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/509dbded-5052-420d-b0a8-fd7370a76725)

#### Signup Common Errors

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/9eb2fab0-6dee-4efc-8b4a-0bf396f297fd)

#### Error handling implementation

1.  Handle different errors in a private method that will be used in Login and Signup scenarios
   ```
    handleErrors(errorResponse:HttpErrorResponse){
    if(!errorResponse.error || !errorResponse.error.error){
      return throwError(() => new Error("an error has been occured"))
    }
    switch(errorResponse.error.error.message){
      case "EMAIL_EXISTS":
        return throwError(() => new Error("The Email already exists"))

      case "EMAIL_NOT_FOUND":
        return throwError(() => new Error("The Email is not found"))
        break
      case  "INVALID_PASSWORD":
        return throwError(() => new Error("invalid password"))
        break
      default:
        return throwError(() => new Error("an error has been occured"))
    }
   ```

2.  Use catchError() operator in the signup() and login() inside the AuthenticationService as follows:
   ```
    signup(email:string,password:string){
      //
      return this.http.post(signupUrl,request)
                      .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse)))
    }
   ```

   ```
    login(email:string,password:string){
      //
      return this.http.post(signupUrl,request)
                      .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse)))
    }
   ```

3. Set the error message in the component property
    - add a string|null property to hold the error message if exists as follows:
      ```
        errorMsg:string|null = null
      ```

    - add the implementation of the error() function of the observer-that subscribe to the signup and login observables- to set the errorMsg property from the recieved error as follows:
      ```
       private handleSignUp(form:NgForm){
          this.authService.signup(form.value.email,form.value.password).subscribe({
             next: //
            ,error: (error) => this.errorMsg = error
          })
        }
      ```
  
      ```
       private handleLogin(form:NgForm){
          this.authService.signup(form.value.email,form.value.password).subscribe({
             next: //
            ,error: (error) => this.errorMsg = error
          })
        }
      ```

    - add a \<div\> to the authentication component template to show the error message if it is exist
      ```
        <div *ngIf="errorMsg !=null">
            {{errorMsg}}
        </div>
      ```

## Share the Logged-in userData through the application
-  we can use the *BehaviourSubject* to share the user data through the application.
-  As the *BehaviourSubject* is a subject that represents an observable sequence with a current value.
-  It's commonly used for implementing data sharing and communication between different components, services, or parts of an Angular application.
-  One unique feature of a BehaviorSubject is that it keeps track of the most recent value that has been emitted. This allows subscribers to immediately receive the latest value when they subscribe, even if they missed previous emissions.
-  So it will keep track of the userData and emits it to the subscribers even if they missed the prvious emissions 

Here is the steps of the implemenation:
1. Create Model class User that holds the data recived from the backend, encapsulate the token and token expiry data as these data will be used to check the validity of the user
   ```
    export class User{
        constructor(public email:string,public id:string
            ,private _token:string, private _tokenExpirationDate:Date ){}
    
        get token(){
            return this._token
        }
    
        get tokenExpirationDate(){
            return this._tokenExpirationDate
        }
    }
   ```
   
2. Create a BehaviourSubject in the *AuthenticationService* and pass a null as an intial value indicating that there is no logged-in user yet
   ```
     authenticatedUserSubject:BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null)
   ```

3. Create a private handler method that has the implementation of the user data sharing and storing, then create a user object using the extracted data from the response
   ```
     private shareAndStoreUserData(response:AuthenticationResponse){
        let expirationDate = new Date(new Date().getTime() + +response.expiresIn*1000)
        let userData = new User(response.email,response.localId,response.idToken,expirationDate)
        this.authenticatedUserSubject.next(userData)
     }
   ```

 4. Use the tap() operator with the *signup* and *login* observable to call *shareAndStoreUserData()*  without affecting the observable return.
   ```
    return this.http.post<AuthenticationResponse>(loginUrl,request)
                    .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse))
                    ,tap( response => this.shareAndStoreUserData(response))
                    )
   ```

## Store Logged-in User Data

1. Create Model class User that holds the data recived from the backend, encapsulate the token and token expiry data as these data will be used to check the validity of the user
   ```
    export class User{
        constructor(public email:string,public id:string
            ,private _token:string, private _tokenExpirationDate:Date ){}
    
        get token(){
            return this._token
        }
    
        get tokenExpirationDate(){
            return this._tokenExpirationDate
        }
    }
   ```

2. Use tap() operator with the *signup* and *login* observable to implmenet the user data storage without affecting the observable return.
   you can use localStorage object to store the user object in the browser localStorage. Here is the implmementation:
   ```
      private storeUserData(response:AuthenticationResponse){
          let expirationDate = new Date(new Date().getTime() + +response.expiresIn*1000)
          let userData = new User(response.email,response.localId,response.idToken,expirationDate)
          localStorage.setItem('userData',JSON.stringify({
            email:userData.email,
            id:userData.id,
            token:userData.token,
            tokenExpirationDate:userData.tokenExpirationDate.toString()
          }))
        }

    login(email:string,password:string){
         //
        return this.http.post<AuthenticationResponse>(loginUrl,request)
                        .pipe(catchError((errorResponse)=>this.handleErrors(errorResponse))
                        ,tap( response => this.storeUserData(response))
                        )
                        
      }
   ```
   












Implementing User Logout

Handling Token Expiry and Refresh
Styling and UI Considerations
