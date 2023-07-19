# Angular Basics

-  angular CLI inject script code to the end of the index.html page, these scripts are responsible for firing angular code to be executed and replace the content of the index page with the component HTML
-  the entry point of the angular is main.ts
-  you will the import *{ AppModule } from './app/app.module'* inside the main.ts file;
-  by default, angular does not scan all your files to search for components, instead, you must register your components inside the *app.module.ts* file by adding the Component name to the **declarations** array inside the *@NgModule()* decoration.
  
  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/69c167cf-f97b-4a4c-923c-1bf50941c464)


# Components
Components are the building blocks that compose an application as shown below:

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/4422da23-d889-48bc-850b-59addd449725)

A component includes:
    1. Typescript class decorated by @Component()
    2. HTML template 
        - coded in the component decoration or in an HTML file
    3. style (optional)
        - coded in the component decoration or in a CSS file
        





# create components  manually or from angular CLI
-  ng generate component <COMPONENT_NAME>
-  ng g c <COMPONENT_NAME>

# inline template vs templateUrl
- we can use inline template by using the attribute template instead of templateUrl in the Component decoration

# Styling components
  inline style vs StyleUrl

# selectors
selectors can be elements, attributes or css classes


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

