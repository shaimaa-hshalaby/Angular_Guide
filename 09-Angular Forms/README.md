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

Validators documentation (https://angular.io/api/forms/Validators)

### Reactive Forms:

-  This approach is based on creating form controls programmatically in the component using TypeScript.
-  It provides more flexibility and control over form validation and handling form data.
-  You define form controls and their validators using FormControl, FormGroup, and FormArray classes.
-  You can subscribe to value and status changes of form controls and react accordingly.
-  Reactive forms are more suitable for complex forms with dynamic validation requirements.
