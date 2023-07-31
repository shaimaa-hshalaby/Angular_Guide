## Angular Forms
Angular forms is a powerful feature of the Angular framework that allows you to create and manage forms in your web applications.
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


2. In your component's HTML template, use the ngForm directive to create a form element. Inside the form, you can add form controls such as input fields, checkboxes, and select dropdowns.
     -  ngForm is a directive that is used to create and manage forms in your application.
     -  It is part of the FormsModule module and provides a way to track the state of the form, handle form submission, and perform form validation.

When you apply the ngForm directive to a <form> element, Angular automatically creates an instance of the NgForm class and associates it with the form element. This allows you to access the form's properties and methods in your component.

Use the ngModel directive to bind form controls to properties in your component class. This allows you to access the form control's value and perform validation.

Add validation to your form controls using Angular's built-in validators or by creating custom validators. You can use directives such as required, minLength, and pattern to enforce validation rules.

Handle form submission by adding an event handler to the form's ngSubmit event. Inside the event handler, you can access the form's values and perform any necessary actions, such as sending data to a server.

### ngForm

-  The ngForm directive helps create and manage forms in your application. It's included in the FormsModule module and allows you to track the form's state, handle submissions, and validate form entries.
-  If you use the ngForm directive on a <form> element, Angular will generate an instance of the NgForm class and link it with the form element. This enables you to access the form's properties and methods in your component.

-  The ngForm directive provides several important features:

      -  **Form State Tracking**: The NgForm instance tracks the state of the form, such as whether it is valid or invalid, pristine or dirty, and touched or untouched. You can access these states and use them to control the behavior of your form.

Form Submission Handling: The ngForm directive allows you to handle form submission using the (ngSubmit) event binding. When the form is submitted, the associated method in your component is called, allowing you to perform actions such as sending data to a server or updating the application state.

Form Validation: Angular provides powerful form validation capabilities, and the ngForm directive plays a role in this. You can add validation rules to form inputs using attributes such as required, minlength, maxlength, etc. The NgForm instance tracks the validity of the form and its inputs, allowing you to display error messages and control the behavior of your form based on its validity.

By using the ngForm directive, you can easily create and manage forms in your Angular application, track their state, handle submission, and perform validation.

I hope this clarifies what ngForm is in Angular. Let me know if you have any further questions!

### NgForm class structure:

#### Properties:
| PROPERTY | DESCRIPTION |
|---|---|
| **controls:** | This property holds a collection of form controls within the form. Each control is identified by its name.|
|  **dirty:** | This property indicates whether any of the form controls have been modified.|
|  **errors:** | This property holds the validation errors for the form controls.|
|  **formDirective:** | This property provides access to the parent FormGroupDirective instance.|
|  **invalid:** | This property indicates whether the form is invalid.|
|  **pending:** | This property indicates whether any of the form controls are pending asynchronous validation.|
|  **pristine:** | This property indicates whether none of the form controls have been modified.|
|  **status:** | This property holds the overall status of the form, which can be 'VALID', 'INVALID', 'PENDING', or 'DISABLED'.|
|  **statusChanges:** | This property is an Observable that emits the form's status whenever it changes.|
|  **submitted:** | This property indicates whether the form has been submitted.|
|  **touched:** | This property indicates whether any of the form controls have been blurred.|
|  **untouched:** | This property indicates whether none of the form controls have been blurred.|
|  **valid:** | This property indicates whether the form is valid.|
|  **value:** | This property holds the current value of the form.|
  
#### Methods:

-  **addControl(control: AbstractControl):** This method adds a control to the form.
-  **addFormGroup(dir: FormGroupDirective):** This method adds a FormGroupDirective to the form.
-  **getControl(name: string):** This method returns the form control with the specified name.
-  **getFormGroup(dir: FormGroupDirective):** This method returns the FormGroupDirective associated with the specified form group.
-  **removeControl(control: AbstractControl):** This method removes a control from the form.
removeFormGroup(dir: FormGroupDirective): This method removes a FormGroupDirective from the form.
resetForm(value?: any): This method resets the form to its initial state.
setErrors(errors: ValidationErrors | null): This method sets the validation errors for the form.
setValue(value: any): This method sets the value of the form.

The NgForm class is typically used in conjunction with the ngForm directive in the template to create and manage forms in Angular applications. It provides a powerful and flexible way to handle form validation and submission.



----------------

In Angular, 













----------
Built-in Validators documentation (https://angular.io/api/forms/Validators)
directives documentation (https://angular.io/api?type=directive)




### Reactive Forms:

-  This approach is based on creating form controls programmatically in the component using TypeScript.
-  It provides more flexibility and control over form validation and handling form data.
-  You define form controls and their validators using FormControl, FormGroup, and FormArray classes.
-  You can subscribe to value and status changes of form controls and react accordingly.
-  Reactive forms are more suitable for complex forms with dynamic validation requirements.
