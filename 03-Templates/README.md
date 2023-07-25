## What is Angular Templates?
-  Template is a blueprint for a fragment of a user interface (UI)
-  Templates are written in HTML and a special syntax for angular dynamic functionalities such as built-in template functions, variables, event listening, and data binding.
-  it does not include elements such as "<HTML>", "<body>", or "<base>" because it is a fragment of the UI.
-  Angular does not support the <script> element in templates to eliminate the risk of script injection attacks.


## AppComponent Template
When you generate an Angular application with the Angular CLI, the *app.component.html* file is the default template containing placeholder HTML.

## More about Template Syntax

### Interpolation
-  Interpolation refers to embedding expressions into HTML code. By default, interpolation uses the double curly braces {{ and }} as delimiters.

#### Interpolation Example 
1. Create an angular skeleton project, this will create *AppComponent* Typescript class inside *app.component.ts* and corresponding Template file *app.component.html*
2. Add a property into the component class as follows
   ```
      name:string = 'Shaimaa'
   ```

3. Add **text interpolation** to the component template *app.component.html* to display the value of the property dynamically in the HTML as follows: 

   ```
     <p> Hi {{name}}</p>
   ```

4. Angular replaces *{{name}}* with the value of the corresponding component property. In this case, the page will display
   > Hi Shaimaa

--------------------
### Template statements
-   Template statements are methods or properties that you can use in your HTML to respond to user events. 
-   With template statements, your application can engage users through actions such as displaying dynamic content or submitting forms.
-   Template statements use a language that looks like JavaScript

#### Template Statement Example
1. Add a property *counter* and initialize it with zero into the component ts class in the *app.component.ts* as follows:
    ```
       counter:number = 0;
    ```

3. In the *app.component.html*, display the counter by adding text interpolation as follows:
   
    ```
     <p>Counter is {{counter}}</p>
    ```

4. Add 3 buttons to the html template to increase, decrease and reset the counter and use the template statements to add events' listeners to the click event for each button as follows:
   
   ```
      <button (click)="increaseCounter()"> +1 </button>
      <button (click)="decreaseCounter()"> -1 </button>
      <button (click)="reset()"> reset </button>
   
   ```

   > Notice that the event click is written (click) inside the element HTML tag, it is an angular syntax.
   
5. Add the event handlers for the 3 buttons to the Component Typescript class as follows:
     ```
          // +1 btn click event handler
          increaseCounter(){
            this.counter++;
          }
      
          // -1 btn click event handler
          decreaseCounter(){
            this.counter--;
          }
      
          // reset btn click event handler
          reset(){
            this.counter=0;
          }
   
      ```

6. The output should be as the GIF below:
      
      ![Untitled design](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/da827fc6-dae8-418b-9d7e-2ce009888178)


#### Statement context
-   Statements have a context — a particular part of the application to which the statement belongs.
-   Statements can refer only to what's in the statement context, which is typically the component instance such as event handlers and properties.
-   The statement context may also refer to properties of the template's own context. (such template reference variable)
-   Template context names take precedence over component context names(If they have the same name)

-  Angular applies the following precedence logic to determine the context:
      -   The template variable name.
      -   A name in the directive's context.
      -   The component's member names.
---------------------------
### Template Expressions
In Angular, template expressions are computations or assignments done in the template inside the interpolation curly braces. This expression is considered local and only exists inside the template.






---------------------------

## Understanding Binding
In an Angular template, a binding creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs).

#### Binding types:
-   text interpolations
-   property binding
-   event binding
-   two-way binding

#### Binding parts:
-   a *target* which will receive the bound value
-   a *template expression* which produces a value from the model, the context of the template expression is the component instance

---------------

### property binding

-   property binding moves the data in one direction, from the component instance to the target element in the template
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/f986df74-a2aa-4677-8b63-c55b61027116)

- A *target property* is the DOM property to which you want to assign a value.
- To identify the property as a *target property*, enclose it in square brackets [].
- The brackets, [], cause Angular to evaluate the right-hand side of the assignment as a dynamic expression.

#### property binding Example:

1.   define a component with a property imageURL with type string.

      ```
         @Component({
           selector: 'app-property-binding',
           templateUrl: './property-binding.component.html'
         })
         export class PropertyBindingComponent {
           imageURL:string='';
         }
   
      ```

2.   In the template file, add an image tag with a target property *[src]* that refers to the component property *imageURL*

      ```
         <img [src]="imageURL"  style="max-width: 300px;max-height: 300px;">
      ```     

3.   Add input Element to allow the user to add value for the imageURL and bind it to the component property as follows:
   
      ```
         <input type="text" [(ngModel)]="imageURL">
      ``` 
  
5. The output should be as in the GIF image below
   
      ![Untitled design (2)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/b7e5faa1-fe39-428f-9a2e-a910d7e01458)



--------------------------

#### To do 
template variables
https://angular.io/guide/template-reference-variables

template expression operators
