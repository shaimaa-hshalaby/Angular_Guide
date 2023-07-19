# Angular Basics

## Components
Components are the building blocks that compose an application as shown below:

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/4422da23-d889-48bc-850b-59addd449725)

A component includes:
  1.  Typescript class decorated by **@Component()**
  2.  HTML template 
        - coded in the component decoration or in an HTML file
  3.  style (optional)
        - coded in the component decoration or in a CSS file
        
### Create components  manually or from angular CLI

#### Manual Creation
1.  Create the component files manually by creating a folder inside the app folder and add the component files as shown in the screenshot below:
  
![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/c092e09c-6b41-4f2f-a9c1-b41b6353d09f)

2.  create the *ManualHelloWorldComponent* Typescript class inside the *manual-helloworld.component.ts* file and export it as follows:
  ```
    import {Component} from '@angular/core'

    @Component({
        selector:'app-manual-hello-world',
        templateUrl:'./manual-helloworld.component.html',
        styleUrls:['./manual-helloworld.component.css']
    })
    export class ManualHelloWorldComponent{
    
    }
  ```

3.  Add the HTML code that represents the component layout to the template file *manual-helloworld.component.html*, as an example:
  ```
    <h1>Manual Hello World Component</h1>
    <p> Creating a template file for the Manual Hello World component</p>
  ```

4. We can add CSS code to *manual-helloworld.component.css*, as an example:
  ```
    p {
        background-color: bisque;
        color: blue;
    }
  ```

5. Add The component to the AppModule inside the *app.module.ts* file as follows:
   
   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/72d7a2b9-2ba5-4fb4-b976-6bf4dc0ca289)
 

6. clear the content of the AppComponent's HTML template file *app.component.html* to add our custom code.
7. simply add the tag *<app-manual-hello-world>* that represent *ManualHelloWorldComponent* inside the *app.component.html* file
   
  ```
  <app-manual-hello-world></app-manual-hello-world>
  ```
8. open a template, navigate to the project folder, then run the following command to compile and build the application
  ```
   ng serve
  ```
10. navigate to http://localhost:4200/, you will find the page include your ManualHelloWorldComponent
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/20b32250-ddde-4535-accb-0a3355adb2d9)


-----------------------
     ng generate component <COMPONENT_NAME>
-  ng g c <COMPONENT_NAME>

### inline template vs templateUrl
- we can use inline template by using the attribute template instead of templateUrl in the Component decoration

### Styling components
  inline style vs StyleUrl

### selectors
selectors can be elements, attributes or css classes


## Module
Every application has at least one Angular module, the root module, which must be present for bootstrapping the application on launch. By convention and by default, this NgModule is named AppModule.


# Data Binding
it is some sort of communication between templates(Html) and typescript code to display dynamic data into the templates
-  string interpolation
    {{  }}
-  property binding
  [html_Atr] = "typescript attribute"
-  event binding
  (event) = "ts method name"
-  two way binding

# Directives 

**ngIf** structural directive which means that it adds and removes elements
**ngIf else**

**ngStyle**
**ngClass**


# Debugger attached to the browser
developer tools -> sources -> webpack -> choose your file and add break point

