## What is Angular Templates?
-  Template is a blueprint for a fragment of a user interface (UI)
-  Templates are written in HTML and a special syntax for angular dynamic functionalities such as built-in template functions, variables, event listening, and data binding.
-  it does not include elements such as <html>, <body>, or <base> because it is a fragment of the UI.
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


