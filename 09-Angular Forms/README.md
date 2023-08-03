## Angular Forms
-  Angular form is a powerful feature of the Angular framework that allows you to create and manage forms in your web applications.
-  Angular is a platform for single-page applications. Therefore, form submission is handled in a way that prevents the loss of application state during the default HTML form submission behavior.
-  Instead of including the action attribute in the form tag, we utilize the built-in event (ngSubmit).

It provides two approaches for building forms: 
  -  Template-driven forms
  -  Reactive forms.

It supports features like:
  -  Form validation
  -  Form submission
  -  Error handling
  -  Form control manipulation


### Template-driven Forms:

-  This approach is based on using Angular directives in the template to build and validate forms.
-  It requires less code and is suitable for simple forms with basic validation requirements.
-  Form controls are created automatically based on the HTML form elements and directives used in the template.
-  You can use ngModel directive for two-way data binding and ngForm directive to track the form's state and validity.

To create a template-driven form in Angular, you'll need to follow a few steps:

1.  Import the FormsModule from @angular/forms in your module file. This module is required to use template-driven forms.
   
       ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/d1ca07ef-d87d-4d20-b7f7-6e69b9da890a)


2. In your component's HTML template, use the ngForm directive to create a form element to force Angular to generate an instance of the NgForm class and link it with the form element. This enables you to access the form's properties and methods in your component.
    ```
      <form (ngSubmit)="onSubmit(form)" #form="ngForm">
        <button type="submit">submit</button>
      </form>
    ```
    > - The ngSubmit event is a built-in Angular event that is triggered when a form is submitted.
    > - It is commonly used in Angular forms to handle form submissions and perform actions based on the form data.
    > - Learn more about ngForm [here](#ngform).
    > - Learn more about NgForm [here](#ngform-class-structure)


3. In Angular, to connect the form controls to the ngForm object, you must use the ngModel directive and must add the name attribute to the HTML element. This enables you to access the form controls and their properties through the ngForm object. Angular does not scan the forms and add form controls automatically, so you must add form control manually.
  
   ```
     <input name="name" type="text" ngModel/><br>
   ```
   > It would not work if you did not set the name attribute for the form control

6. Add validation to your form controls using Angular's built-in validators or by creating custom validators. You can use directives such as required, minLength, and pattern to enforce validation rules. check the built-in validator list from [here](#built-in-validators)
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/61d17f05-1662-436a-895f-f84b579581b6)

7. you can force angular to create an object with Type NgModel and assign it to a local reference to hold all states of specific form control as follows:
   ```
     #lName="ngModel" 
   ```

8. To set default values for some form controls, you can use ngModel directive with a one-way binding as follows:
   ```
     [ngModel]="defaultCountry"
   ```
   and set the default value in the component instance as follows:
   ```
     defaultCountry:string = 'egypt'
   ```
9. To instantly feel the change in the form-control value without submission, you can use 2 way binding to assign the form-control value to one of the instance properties
    ```
      [(ngModel)]="bio"
    ```
9. Handle form submission by adding an event handler to the form's ngSubmit event. Inside the event handler, you can access the form's values and perform any necessary actions, such as sending data to a server. for more form controls check this [section](#methods)
10. you can reset the form by calling the form.reset() method as a handler of the reset button as follows:
    ```
      <button (click)="form.reset()" >Reset Form</button>
    ```
----------------
### working with radio buttons
1. you can set an array in the component instances to hold the available values for the radio buttons, or you can set them as static values in the template
2. to create radio buttons in the template which refers to the genders array in the instance, follow the provided code below:
    ```
     <div class="radio" *ngFor="let gender of genders">
            <label>
                <input type="radio" name="gender" [value]="gender" ngModel>{{gender}}
            </label>
        </div>
    ```

----------------
### difference between setValue() and patchValue()
both setValue() and patchValue() are methods provided by the FormGroup and FormControl classes to update the values of form controls. However, there are some differences between the two methods.
The **setValue()** method is used to set the value of all form controls within a form group. It requires you to pass an object that matches the structure of the form group. This means that you need to provide values for all form controls, even if you only want to update a single control. If you don't provide a value for a control, it will throw an error. Here's an example:
  ```
   setForm(form:NgForm){
      form.setValue({
        fName: 'Shaimaa',
        lName: 'Shalaby',
        email: 'shaimaa@gmail.com',
        bio:'Java, Spring and Angular instructor'
      })
    }
  ```

The **patchValue()** method is used to update the values of one or more form controls within a form group. It allows you to pass an object with key-value pairs, where the keys represent the form control names and the values represent the new values you want to set. If a control is not included in the object, its value will remain unchanged. Here's an example:

  ```
    patchValueToForm(submittedForm:NgForm){
      submittedForm.form.patchValue({
        bio:'Java, JSF, J2EE, Spring, Springboot, Microservices and Angular Instructor'
      })
    }
  ```
----------------
### Reset the Form

the reset() method in Angular is used to reset the form back to its initial state. It clears all the form controls and resets their values to their initial values. Here is an example

```
  (click)="form.reset()"
```

----------------

### ngModelGroup directive

-  *ngModelGroup* is a directive in Angular that allows you to group multiple form controls together. It is useful when you want to perform operations on a group of form controls, such as validation or resetting their values.
-  By using *ngModelGroup*, you can create a logical grouping of form controls within a form. This grouping can be used to apply form-level validation or to reset the values of all the controls in the group at once.
-  To create an ngModelGroup, use the code provided below.
  
      ```
        <form>
          <div ngModelGroup="user">
            <input type="text" name="firstName" [(ngModel)]="firstName">
            <input type="text" name="lastName" [(ngModel)]="lastName">
          </div>
        </form>
      ```

- To access the form-group in the template statement for resetting or performing any other actions, please refer to the code provided below:
    ```
      (click)="form.controls['user'].reset()"
    ```
- angular add CSS classes mapped to the group states to the div containing the ngModelGroup, for more info about Form CSS class from [here](#form-style)
- To access the JSON object mapped to the form group, use the code provided below:
  ```
    form.controls['user'].value  
  ```
- you can create Local Reference to the ngModelGroup as follows:
  ```
   <div ngModelGroup="userInfo" #userInfoLocalRef="ngModelGroup">

   </div>
  ```
----------------

### What Angular does with Forms

1.  **Component Creation:** When you create an Angular component that contains a form, Angular creates an instance of that component. This component acts as the controller for the form and handles its behaviour and data.

2.  **Form Initialization:** Angular initializes the form by creating an instance of the NgForm class (ngForm). This class represents the form and provides various properties and methods to interact with the form.

3. **Form Directives:** In the component's template, you can use Angular's form directives to define the form structure. These directives include ngForm, ngModel, and others. The ngForm directive is used to create a reference to the form, while the ngModel directive is used to bind form controls to properties in the component.

4. **Two-Way Data Binding:** Angular uses two-way data binding to synchronize the form controls with the component's properties. When the user interacts with the form controls, the corresponding properties in the component are automatically updated, and vice versa.

5.  **Form Validation:** Angular provides built-in validators that you can apply to the form controls. These validators ensure that the user enters valid data. Angular also tracks the validity state of the form and its controls, allowing you to perform actions based on the form's validity.

6.  **Form Submission:** When the user submits the form, Angular captures the form submission event and triggers the associated method in the component. You can handle this event and perform any necessary actions, such as sending the form data to a server or updating the UI.

7.  **Form Data Access:** Using the local reference syntax (#form="ngForm"), you can access the form and its controls in your component. This allows you to retrieve the values entered by the user, validate the form, and perform any additional processing.

----------------
### Form style

In Angular, there are several CSS classes that are automatically added to form controls based on their states. Here are some of the commonly used classes:
| CSS CLASS | DESCRIPTION |
|---|---|
| ng-pristine | This class is added to a form control when it has not been interacted with by the user yet. It indicates that the control is in its initial state.  |
| ng-dirty  |  This class is added to a form control when its value has been changed by the user. It indicates that the control has been modified.  | 
| ng-valid  |  This class is added to a form control when its value is considered valid according to the validation rules defined for that control.  | 
| ng-invalid  |  This class is added to a form control when its value is considered invalid according to the validation rules defined for that control.  | 
| ng-touched   |  This class is added to a form control when it has been blurred or focused out by the user. It indicates that the control has been touched.  | 
| ng-untouched  |  This class is added to a form control when it has not been blurred or focused out by the user. It indicates that the control has not been touched.  | 

----------------

### ngForm

-  The ngForm directive helps create and manage forms in your application. It's included in the FormsModule module and allows you to track the form's state, handle submissions, and validate form entries.
-  If you use the ngForm directive on a \<form\> element, Angular will generate an instance of the NgForm class and link it with the form element. This enables you to access the form's properties and methods in your component.

-  The ngForm directive provides several important features:

  -  **Form State Tracking**: The NgForm instance tracks the state of the form, such as whether it is valid or invalid, pristine or dirty, and touched or untouched. You can access these states and use them to control the behavior of your form.

  -  **Form Submission Handling:** The ngForm directive allows you to handle form submission using the (ngSubmit) event binding. When the form is submitted, the associated method in your component is called, allowing you to perform actions such as sending data to a server or updating the application state.

  -  **Form Validation:** Angular provides powerful form validation capabilities, and the ngForm directive plays a role in this. You can add validation rules to form inputs using attributes such as required, minlength, maxlength, etc. The NgForm instance tracks the validity of the form and its inputs, allowing you to display error messages and control the behaviour of your form based on its validity. To learn more about the built-in validator, check [here](#built-in-validators)

---------------------

### NgForm class structure:

#### Properties:
| PROPERTY | DESCRIPTION |
|---|---|
| **controls** | This property holds a collection of form controls within the form. Each control is identified by its name.|
|  **dirty** | This property indicates whether any of the form controls have been modified.|
|  **errors** | This property holds the validation errors for the form controls.|
|  **formDirective** | This property provides access to the parent FormGroupDirective instance.|
|  **invalid** | This property indicates whether the form is invalid.|
|  **pending** | This property indicates whether any of the form controls are pending asynchronous validation.|
|  **pristine** | This property indicates whether none of the form controls have been modified.|
|  **status** | This property holds the overall status of the form, which can be 'VALID', 'INVALID', 'PENDING', or 'DISABLED'.|
|  **statusChanges** | This property is an Observable that emits the form's status whenever it changes.|
|  **submitted** | This property indicates whether the form has been submitted.|
|  **touched** | This property indicates whether any of the form controls have been blurred.|
|  **untouched** | This property indicates whether none of the form controls have been blurred.|
|  **valid** | This property indicates whether the form is valid.|
|  **value** | This property holds the current value of the form.|
  
#### Methods:

| METHOD | DESCRIPTION |
|---|---|
|   **addControl(control: AbstractControl)** |  This method adds a control to the form.
|   **addFormGroup(dir: FormGroupDirective)**|  This method adds a FormGroupDirective to the form.
|   **getControl(name: string)**|  This method returns the form control with the specified name.
|   **getFormGroup(dir: FormGroupDirective)**|  This method returns the FormGroupDirective associated with the specified form group.
|   **removeControl(control: AbstractControl)**|  This method removes a control from the form.
|  **removeFormGroup(dir: FormGroupDirective)** |  This method removes a FormGroupDirective from the form.
|  **resetForm(value?: any)** |  This method resets the form to its initial state.
|  **setErrors(errors: ValidationErrors \| null)** |  This method sets the validation errors for the form.
|  **setValue(value: any)** |  This method sets the value of the form.

The NgForm class is typically used in conjunction with the ngForm directive in the template to create and manage forms in Angular applications. It provides a powerful and flexible way to handle form validation and submission.

--------------------

### Built-in Validators

| VALIDATOR DIRECTIVE | DESCRIPTION |
|---|---|
|  required | Validates that a form control has a value.
|  requiredTrue | Validates that a form control has a value of true.
|  email | Validates that a form control has a valid email address.
|  minLength | Validates that a form control has a minimum length of characters.
|  maxLength | Validates that a form control has a maximum length of characters.
|  pattern | Validates that a form control matches a specified regular expression pattern.
|  nullValidator | A validator that always returns null, used to disable validation.
|  min  | Validates that a form control has a numeric value greater than or equal to a specified minimum value.
|  max  | Validates that a form control has a numeric value less than or equal to a specified maximum value.
|  pattern  | Validates that a form control matches a specified regular expression pattern.
|  compose  | Combines multiple validators into a single validator function.



-----------

### Exercises

1. disable submit button with form.valid
2. change the css syle of the field if it is not valid
3. use different validators
4. use states built-in CSS classes to change appearance according to the state 


----------

Built-in Validators documentation (https://angular.io/api/forms/Validators)
directives documentation (https://angular.io/api?type=directive)

## Reactive Forms:

-  This approach is based on creating form controls programmatically in the component using TypeScript.
-  It provides more flexibility and control over form validation and handling of form data.
-  You define form controls and their validators using FormControl, FormGroup, and FormArray classes.
-  You can subscribe to value and status changes of form controls and react accordingly.
-  Reactive forms are more suitable for complex forms with dynamic validation requirements.
-  


### Create a Reactive Form 

1. Import the ReactiveFormsModule in your Angular module:
   ```
      import { ReactiveFormsModule } from '@angular/forms';

      @NgModule({
        imports: [
          ReactiveFormsModule
        ],
        // ...
      })
      export class AppModule { }
   ```

2. Create a FormGroup and FormControl in your component:
   ```
     signupForm:FormGroup;
     ngOnInit(): void {

        this.signupForm = new FormGroup({
          username: new FormControl(null),
          email: new FormControl(null),
          gender: new FormControl('female')
          
        })
     }
   ```
3. Bind the form group and form controls to your template using the reactive form directives:
     - To bind the form group, use the *formGroup* directive and bind it to the formGroup object in the component instance as follows:
       
       ```
          <form [formGroup]="signupForm" >

          </form>
       ```

    - To bind the form controls, use *formControlName* directive and bind it to the form control name inside the formGroup object, Here's an example:
      
      ```
        <input class="form-control" name="userName" type="text" formControlName="username" />
      ```

4. Submit the form using (ngSubmit) event, you don't need to pass the form as a parameter because it is actually created inside the component and bound to the template.

### Adding validation to the Reactive form
To add validation to a reactive form in Angular, you can use the built-in validators provided by Angular or create custom validators. 

#### Adding built-in validation to the Reactive Form

to apply validators to the form controls:

- Import the required Classes
    ```
      import { FormGroup, FormControl, Validators } from '@angular/forms'
    ```
    
- Use the Validators class to apply built-in validators such as required, email, minLength, maxLength, pattern, etc.
    ```
     this.signupForm = new FormGroup({
        username: new FormControl(null,Validators.required),
        email: new FormControl(null,[Validators.email,Validators.required]),
        gender: new FormControl('female')
  
      })
    ```
    
- you can apply one validator by passing a reference of the desired validator to the constructor of the FormControl such as username form control 
    ```
      username: new FormControl(null,Validators.required)
    ```

- or you can apply multiple validators by passing an array of built-in validators such as email form control:
    ```
      email: new FormControl(null,[Validators.email,Validators.required])
    ```
    
- or you can use the setValidators() function by getting the FormControl object from the FormGroup object using the get() method provided by FormGroup class
   ```
       this.signupForm.get('email')?.setValidators([Validators.email,Validators.required])
   ```

   > The syntax ?. is called the "safe navigation operator" or "optional chaining operator" in TypeScript and JavaScript.
   > It is used to access properties or call methods on an object that may be null or undefined without causing an error.
    
- To access the FormControl states in the template, you can use the get() method of the FormGroup with ngIf directive to conditionally display error messages based on the form control's validity state.
  ```
     <small class="form-text text-muted"
        *ngIf="signupForm.get('username')?.invalid && signupForm.get('username')?.touched" >
              Please use a valid username
     </small>
  ```

### Create Custom Validator

A custom validator is a function with a specific signature that can be included in the same TypeScript file as the component or in a separate file.

To create a custom validator in Angular, you can follow these steps
1. To create your own custom validator, make a new typescript file such as "custom.validator.ts". This is where you can define the logic for your custom validator or you can define the validator into your component instance instead.

2. Import the necessary Classes and Interfaces
   ```
    import { AbstractControl, ValidationErrors } from '@angular/forms';
   ```
3. Create and export a function for your custom validator. This function should accept an *AbstractControl* parameter and return a *ValidationErrors* object if the validation fails, or null if the validation passes.
let's create a validator that validates that the employee code starts with the 'ABC' prefix or not
   ```
      export function validateEmployeeCode(control:AbstractControl):ValidationErrors|null{
          let prefix = 'ABC'
          if(!control.value.startsWith(prefix)){
              return {notPrefixed:true}
          }
          return null
      }
   ```
   
The structure of ValidationErrors Interface, is key-value paired, so it will accept string keys with any values

   ```
     interface ValidationErrors {
        [key: string]: any;
      }
   ```
4. To enable the custom validator in your Angular component, you must import it and add it to the validators array of the FormControl or FormGroup that requires validation.

   ```
     import { validateEmployeeCode } from './custom.validators';
   ```

   ```
    this.form = this.fb.group({
        personalInfo :this.formBuilder.group({
          //
           ,'employeeCode':['',[Validators.required,validateEmployeeCode]]
        })
    })
   ```

5. The following GIF demonstrates the output
   
     ![Untitled design (11)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/5c6a7e74-5eeb-439e-a08b-c115048f97e0)

#### Create Custom validator with parameters

SomeTimes you need to pass parameters to the custom validator, but in the other hand you must define the custom validator function to only recieve AbstractControl parameter so we can create custom validation function that return a reference to ValidatorFn but accept any parameters that we need.

Let's modify the previous example of custom validator and pass the prefix as a parameter, the validator function will be as follows:
```
  import { FormControl,ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms'
  
  export function validateEmployeeCodeWithParameter(prefix:string):ValidatorFn{
      return (control: AbstractControl):ValidationErrors|null => {
          if(!control.value.startsWith(prefix)){
              return {notPrefixed:true}
          }
          return null
      }
  }
```

-------------------------------------------
### Adding Nested Form Groups

You can create nested form groups to organize your form controls hierarchically. This is useful when you have complex forms with sections or sub-sections that must be managed separately.

1. import the necessary Classes into your component
   ```
    import { FormGroup, FormControl, Validators } from '@angular/forms'
   ```
   
2. create the parent FormGroup which represents the whole form and create nested FormGroups using FormGroup class, Here's an example of a form that contains 2 from the group, personalInfo and Address. then assign form controls to the group using the FormControl class.
   
   ```
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
   ```

3. In the template, create the HTML code of your form and then bind the nested form groups to it using [formGroup] & [formControlName]  directives as follows:
   ```
      <form [formGroup]="form">
   
        <div formGroupName="personalInfo" >
            <div class="form-group">
                <label for="fName">First Name</label>
                <input class="form-control" name="fName" type="text" formControlName="firstName"/><br>
            </div>
            <div class="form-group">
                <label for="lName">Last Name</label>
                <input class="form-control"  name="lName" type="text" formControlName="lastName" /><br>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" name="email" type="text" formControlName="email" /><br>
            </div>
        </div>
   
        <div formGroupName="address">
                <div class="form-group">
                    <label for="country">Country</label>
                    <input class="form-control" name="country" type="text" formControlName="country" /><br>
                </div>
                <div class="form-group">
                    <label for="city">City</label>
                    <input class="form-control"  name="city" type="text" formControlName="city" /><br>
                </div>
                <div class="form-group">
                    <label for="street">Street</label>
                    <input class="form-control" name="street" type="text" formControlName="street" /><br>
                </div>
        </div>

       <button class="btn btn-success" type="submit" >submit</button>
      
      </form>
   ```
   > Note that we have used the directive *formGroupName* to bind the group of form controls with the nested FormGroup inside the form object created in the instance formGroupName="personalInfo", formGroupName="address"

4. To access the form-control states, we use the dot operator to reach the desired form-control, Here is an example:
   ```
    form.get('personalInfo.firstName').invalid
    form.get('personalInfo.firstName').touched
   ```

### FormArray 
the FormArray class is a part of the Angular Forms module and is used to manage an array of form controls. It provides a way to dynamically add or remove form controls within a form group. Here's an example of how to create a FormArray and (add/ remove) controls (to/from) it dynamically.

1. Import the necessary classes into your component instance
    ```
      import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
    ```

2. When initializing the component, make sure to include a FormArray in the FormGroup. check the code provided below:

   ```
     form:FormGroup
   
     ngOnInit(): void {
   
        this.form = new FormGroup({
          personalInfo : new FormGroup({
             //
          }),
          additionalInfo: new FormGroup({
              hobbies: new FormArray([])
          })
        })

      }
   ```

3. create a property of type FormArray to hold the hobbies FormArray for easy handling
   ```
      this.hobbiesArray = this.form.get('additionalInfo.hobbies') as FormArray
   ```

4. To add elements to a FormArray on the template, you can use the formArrayName, formControlName directives along with the push(), removeAt() methods. Here's an example:
   ```
       <div formGroupName="additionalInfo">
            <div formArrayName="hobbies">
                   <div class="input-group mb-3" *ngFor="let hobby of hobbiesArray.controls, let i=index">
                        <input class="form-control" type="text" [formControlName]="i" />
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary" (click)="removeFromHobbies(i)" type="button">X</button>
                        </div>
                   </div>
            </div>
            <div>
                <button class="btn btn-primary" (click)="onAddHobbies()">add hobby</button>
            </div>
    </div>

   ```

5. add onAddHobbies() and removeFromHobbies() handlers to your instance as follows:
    ```
       onAddHobbies(){
          let control = new FormControl(null,Validators.required);
          this.hobbiesArray.push(control)
       }

       removeFromHobbies(index:number){
          this.hobbiesArray.removeAt(index)
       }
    ```

6. The following GIF illustrates how the previous code behaves:

     ![Untitled design (10)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/348349d1-6759-4a2a-aa15-f3bc73acabe7)
