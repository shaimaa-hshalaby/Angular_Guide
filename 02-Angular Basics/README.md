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
1  -  you can create the component files manually by creating a folder inside the app folder and adding the component files as shown in the screenshot below:
  
![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/c092e09c-6b41-4f2f-a9c1-b41b6353d09f)

2  -  create the *ManualHelloWorldComponent* Typescript class inside the ts file and export it as follows:
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






--------

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

