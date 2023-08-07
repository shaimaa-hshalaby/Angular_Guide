## What is Angular Templates?
-  Template is a blueprint for a fragment of a user interface (UI)
-  Templates are written in HTML and have a special syntax for angular dynamic functionalities such as built-in template functions, variables, event listening, and data binding.
-  it does not include elements such as "\<HTML\>", "\<body\>", or "\<base\>" because it is a fragment of the UI.
-  Angular does not support the \<script\> element in templates to eliminate the risk of script injection attacks.


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
-   the syntax of template statement is like (event)="statement"

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

-   In Angular, template expressions are computations or assignments done in the template inside the interpolation curly braces.
-   This expression is considered local and only exists inside the template.
-   Template expressions in Angular are used to evaluate and display values dynamically.
-   They are enclosed in double curly braces {{ }} and can contain valid JavaScript expressions.
-   Template expressions are used to display data from the component class in the view (template).
-   Text interpollation is a template expression

#### Template Expressions Example

- create component with 2 properties x and y with type number
- intialize the 2 properties with intial values
- add the template expression to the template to calculate the division of x/y as follows:
  ```
   <p>(X/Y) = {{x/y}}</p>
  ```

- you can add 2 way binding to x and y to dynamically read the values of them from user inpusts as follows:
  ```
   X: <input type="text" class="form-control" [(ngModel)]="x" ><br>
   Y: <input type="text" class="form-control" [(ngModel)]="y" ><br>
  ```

- The following GIF illustrates the output after adding the 2 way binding:
  
     ![Untitled design (13)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/51cdfa9e-68fc-4a38-a1ce-73ff370cf321)


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

1.   create a component with a property imageURL with type string.

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

------------------
### Event Binding

Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3d8e240c-1f5b-4a21-8ec1-cb1678766e7a)

-   The event binding listens to the event that occurs with this element and executes the template statement.
-   template statement may be a method in the component statement or an expression to be executed.

#### Event binding example:
we will create a demo that has a button and paragraph, when clicking the button the counter in the paragraph increases

1. Create a component with a *clickCounter* property with a type number and intial value zero.
   ```
     @Component({
        selector: 'app-event-binding',
        templateUrl: './event-binding.component.html'
      })
      export class EventBindingComponent {
      
        clickCounter:number=0;
      
      }
   ```

2. In the component template, add a button with a (click) target event and add a template statement that calls *onClickBtn()* function
   ```
      <button class="btn btn-primary" (click)="onBtnClicked()">Click Me!</button>
   ```

3. Add the declaration of the *onBtnClicked()* funcation in the component class as follows:
    ```
    
        onBtnClicked(){
            this.clickCounter++;
        }

   ```

4. In the component template, add a text interpolation to read the *clickCounter* value
   ```
      <p>button clicked {{clickCounter}} times</p>
   ```

5. the output should be as the GIF below

   ![Untitled design (3)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/779eda4b-f42f-4564-9235-f69e67bce0c8)

-------

### Two-way binding
-   Two-way binding combines property binding with event binding
   -   property binding: Sets a specific element property.
   -   event binding: Listens for an element change event.

-   Angular's two-way binding syntax is a combination of square brackets and parentheses, [()] to combine the brackets of property binding, [], with the parentheses of event binding, ()
-   In Angular, two-way binding is a data binding mechanism that allows data to flow bidirectionally between the component class and the template. It enables the synchronization of data between the model (component class properties) and the view (template) without the need for explicit event handling or manual updating.
-   It is crucial to use it wisely, particularly in scenarios where performance is critical, as it could lead to some additional workload due to frequent synchronization between the component and the template.

-   Here's an example of two-way binding:
      - create a component and include a property called *canvasWidth* with data type number.
        ```
           canvasWidth:number
        ```
   
      - add \<input\> with type range into the component template, then bind its values to the *canvasWidth* using the 2 way binding, to update the value of the component property simultaneously with changing the range
   
        ```
          <input type="range" min="50" max="200" [(ngModel)]="canvasWidth"><br>
        ```
      - on the other hand, add a \<canvas\> element and use property binding to bind its width with *canvasWidth* as follows:
        ```
          <canvas [width]="canvasWidth"></canvas>
        ```
   
      - The following GIF should illustrate the output of the previous exercise:
        
           ![Untitled design (12)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/802b9d9d-f02f-4469-a6e6-9a4d8bc8c0d8)
   
----------------

## Template Variables

-   Template variables help you use data from one part of a template in another part of the template. Use template variables to perform tasks such as respond to user input or finely tune your application's forms.
-   In the template, you use the hash symbol, #, to declare a template variable. The following template variable, #phone, declares a phone variable with the <input> element as its value

   ```
      <input #phone type="text" placeholder="enter the phone number">
   ```
- You can use template variables in various ways:
   -   Accessing the Element in the Component Class
   -   Local Reference within the Template
 
### Accessing the Element in the Component Class
You can access the element in the component class by using the @ViewChild decorator , the bounded property should be with the type *ElementRef*.
Using @ViewChild (for child components):

   ```
      @ViewChild('phone') phoneInput:ElementRef
   ```

To access the value of referenced element from the ElementRef, you can use the following code:

   ```
      this.phoneInput.nativeElement.value
   ```

### Local Reference within the Template

You can use the template variable directly within the template to access and modify the element's properties or trigger methods. here's an example:
   ```
      <input #phone type="text" placeholder="enter the phone number"><br>
      <button (click)="onClickButton(phone.value)">Call Phone Number!</button>
   ```

--------------------------------
## Content projection

 Content projection is used to create flexible, reusable components.
 Content projection is a pattern in which you insert, or project, the content you want to use inside another component

 ### content projection types

 |   TYPE | DESCRIPTION |
 |---|---|
 | **Single-slot content projection** | With this type of content projection, a component accepts content from a single source. |
 | **Multi-slot content projection** | In this scenario, a component accepts content from multiple sources. |
 | **Conditional content projection** | Components that use conditional content projection render content only when specific conditions are met. |

 #### Single-slot content projection 
 
the passed html inside the selector tag of the component always ignored unless you added \<ng-content\> inside the component template, angular will compansate the passed html to the place of the \<ng-content\> tag

 1. create component and add \<ng-content\> tag where you want the projection html to appear as follows:

       ```
         @Component({
           selector: 'app-single-slot-content-projection',
           template: `
             <h1> The header of the parent component</h1>
             <ng-content></ng-content>
           `,
           styleUrls: ['./single-slot-content-projection.component.css']
         })
         export class SingleSlotContentProjectionComponent {
         
         }
       ```

2. In the parent component pass html inside \<the app-single-slot-content-projection\> selector as follows:

      ```
         <app-single-slot-content-projection>
             <div class="projected-div">
                 <p>This is passed paragraph to the ng-content</p>
             </div>
         </app-single-slot-content-projection>
      ```

3. The output should be as follows:
   
      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/dccc0511-cb23-4340-b296-d74c97b5789a)


#### Multi-slot content projection
1- create a component and add more than \<ng-content\> tag to its template as follows:
      ```
         <h1>Multi-slot content projection</h1>
         
         Default:
         <ng-content></ng-content>
         
         selected
         <ng-content select="[special]"></ng-content>
      
      ```
2. The html with attribute "special" will be located in the place of  \<ng-content select="\[special\]"\>
3. In the parent component add the following code
      ```
         <app-multi-slot-content-projection>
             <div special>
                 <p>The special content</p>
             </div>
         
             <div>
                 <p>The default content</p>
             </div>
         </app-multi-slot-content-projection>
      ```

4. The output should be as follows:
   
      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/07810624-ce4b-4c6e-be0f-eececfc75719)
