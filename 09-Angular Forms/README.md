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
7. Handle form submission by adding an event handler to the form's ngSubmit event. Inside the event handler, you can access the form's values and perform any necessary actions, such as sending data to a server.
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

In AngularJS, there are several CSS classes that are automatically added to form controls based on their states. Here are some of the commonly used classes:
| CSS CLASS | DESCRIPTION |
|---|---|
| ng-pristine | This class is added to a form control when it has not been interacted with by the user yet. It indicates that the control is in its initial state.  |

| ng-dirty  |  This class is added to a form control when its value has been changed by the user. It indicates that the control has been modified.  | 

| ng-valid  |  This class is added to a form control when its value is considered valid according to the validation rules defined for that control.  | 

| ng-invalid  |  This class is added to a form control when its value is considered invalid according to the validation rules defined for that control.  | 

| ng-touched   This class is added to a form control when it has been blurred or focused out by the user. It indicates that the control has been touched.  | 

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














----------

Built-in Validators documentation (https://angular.io/api/forms/Validators)
directives documentation (https://angular.io/api?type=directive)

### Reactive Forms:

-  This approach is based on creating form controls programmatically in the component using TypeScript.
-  It provides more flexibility and control over form validation and handling form data.
-  You define form controls and their validators using FormControl, FormGroup, and FormArray classes.
-  You can subscribe to value and status changes of form controls and react accordingly.
-  Reactive forms are more suitable for complex forms with dynamic validation requirements.
