### What is a service?
A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.
-  A component should use services for tasks that don't involve the view or application logic.
-  Services are good for tasks such as fetching data from the server, validating user input, or logging directly to the console.
-  Services can depend on other services. 

### Why services
Components shouldn't fetch or save data directly and shouldn't knowingly present fake data. They should focus on presenting data and delegating data access to a service.

### benefits of services:
-  modularity
-  reusability

### Injector and Providers
-    The **provider** is something that can create or deliver a service(). Most of the time, these dependencies are services that you create and provide.
-    The **injector** is the object that chooses and injects the provider where the application requires it.

### Provider scope
- **Root Scope**:
  When you add a service provider to the root application injector, the same instance is available throughout the application. this can be achieved by 2 methods:
      a. adding meta-data to the *@Injectable()* decorator to define the providedIn property to root as follows:
          ```
              @Injectable({
                providedIn: 'root'
              })
          ```
      b. adding the service class name at the *providers:[]* array in the @NgModule() decorator of AppModule (the bootstrap module)

-  **Module Scope**
  To specify that a service should be provided in a particular @NgModule, so the service can be provided only through the components of this module and all components should share the same instance in this case. To add the service to the module injector scope, you should follow one of the following methods:

     a. adding meta-data to the *@Injectable()* decorator to define the providedIn property to the module as follows:
          ```
              @Injectable({
                providedIn: UserModule
              })
          ```
      b. adding the service class name at the *providers:[]* array in the @NgModule() decorator of the module that you want to add the service provider to it.
    

-  **Component**





### Singleton service
-  By adding the following meta-data to the @injectable() decorator, Angular creates a single, shared instance of the Service and injects it into any class that asks for it.

### How to register the providers to the injector
There are several ways to register the providers to the injector
1.    by adding meta-data to the @Injectable() decorator
2.    by adding the providers to the meta-data of the components or the modules.

### Create Service using Angular CLI
-  Run ng generate to create a service as follows
  
    ```
      ng generate service <SERVICE_NAME>
    ```
-  You will find that the angular CLI created a file named *<SERVICE_NAME>.service.ts* that has a skeleton service class similar to the following:
  
   ```
      import { Injectable } from '@angular/core';
  
      @Injectable({
        providedIn: 'root'
      })
      export class Service {
      
        constructor() { }
      }
   ```
-   *@Injectable()* decorator marks the class as one that participates in the **dependency injection system**.
-   This decorator allows the service to be injected into other components or services.
-   *@Injectable()* decorator accepts a metadata object for the service

### Dependency injection (DI)
DI is the part of the Angular framework that provides components with access to services and other resources.
Angular provides the ability for you to inject a service into a component to give that component access to the service.





To do list
===========
observable services (asynchronous calls)
https://angular.io/tutorial/tour-of-heroes/toh-pt4#observable-heroservice

