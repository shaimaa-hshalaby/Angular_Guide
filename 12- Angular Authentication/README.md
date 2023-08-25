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
          
4. Implment AuthenticationService Signup
    Notice that the endpoint, request body and response body will be changed according to the backend APIs, So the following endpoint, request and response are specific to the firebase

   - The following is a screenshot from the Firebase Authentication documentation

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
          this.authService.signup(form.value.email,form.value.password).subscribe({
            next: (response)=>{console.log(response)}
          })
        }
      ```
      > the response is the objected recieved from the backend -firebase in our case here

5. Implement AuthenticationService Login























Implementing User Logout

Handling Token Expiry and Refresh
Styling and UI Considerations
