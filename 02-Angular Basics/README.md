# Angular Basics

-  angular CLI inject script code to the end of the index.html page, these scripts is responsible for firing angular code to be executed and replace the content of the index page with the component html
-  the entry point of the angular is main.ts
-  you will find this statement import { AppModule } from './app/app.module';
-  by default, angular does not scan all your files to search for components, instead you should tell angular about your components

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


