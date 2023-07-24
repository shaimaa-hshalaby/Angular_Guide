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
