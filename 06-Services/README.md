## Angular Service

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
-   *@Injectable()* decorator accepts a metadata object for the service.


## Dependency injection (DI)

  DI is part of the Angular framework that provides components with access to services and other resources.
  Angular provides the ability for you to inject a service into a component to give that component access to the service.
  
  
  ### Injector and Providers
  -    The **provider** is something that can create or deliver a service or dependency. Most of the time, these dependencies are the services that you create and provide.
  -    The **injector** is the object that chooses and injects the provider where the application requires it.
  
  ### Provider scope
  There are 3 provider scopes:
  -  Root Scope (Bootstrap Module scope)
  -  Module Scope
  -  Component Scope
  
  - **Root Scope (Singleton)**:
    When you add a service provider to the root application injector, the same instance is available throughout the application. this can be achieved by 2 methods:
  
     a. adding meta-data to the *@Injectable()* decorator to define the providedIn property to root as follows:
    
      ```
          @Injectable({
            providedIn: 'root'
          })
      ```
    
     b. adding the service class name at the *providers:[]* array in the @NgModule() decorator of the AppModule (the bootstrap module)

    > Using the first method *@Injectable* allows services to be loaded lazily by Angular when needed, So it is more performance efficient.
  
  -  **Module Scope**:
    To specify that a service should be provided in a particular @NgModule, so the service can be provided only through the components of this module and all components should share the same instance in this case. To add the service to the module injector scope, you should follow one of the following methods:
  
     a. adding meta-data to the *@Injectable()* decorator to define the providedIn property to the module as follows:
   
        ```
            @Injectable({
              providedIn: UserModule
            })
        ```
   
      b. adding the service class name at the *providers:[]* array in the @NgModule() decorator of the module that you want to add the service provider to it.
      
  
  -  **Component Scope**
    In this scope type, service should be provided only to the component that added the service to its own providers' array as follows:
      ```
          @Component({
            providers: [UserService]
          })
        ```
      if there is more than one component added to the service to its provider's array, then each component has access to a different instance of the service
  
  
  ### Hierarchical injectors
  
  With hierarchical dependency injection, you can isolate sections of the application and give them their own private dependencies not shared with the rest of the application or have parent components share certain dependencies with its child components only but not with the rest of the component tree, and so on. Hierarchical dependency injection enables you to share dependencies between different parts of the application only when and if you need to.
  
  Angular has two injector hierarchies:
  
  -  **ModuleInjector hierarchy**: Configure a ModuleInjector in this hierarchy using an @NgModule() or @Injectable() annotation.
  -  **ElementInjector hierarchy**: Created implicitly at each DOM element. An ElementInjector is empty by default unless you configure it in the providers property on @Directive() or @Component().

### How to inject a service in a component or in another injectable service

adding the service that you need to inject as a parameter to the constructor and the angular will inject an instance of the service for you

  ```
    constructor(private studentService:StudentService){}
  ```
------------------------

## Logging Service Exercise


1. Use Angular CLI to create a new logging service with the following command:
     ```
       ng generate service logging
     ```

2. add 3 functions in the logging service to log 3 levels of logging messages info, warning and error.
   ```
      log(info:string){console.log(info)}
      warn(warn:string){console.warn(warn)}
      error(error:string){console.error(error)}
   ```

3. Inject the logging service to the constructor of the AppComponent
    ```
      constructor(private loggingService:LoggingService){}
    ```

4. In the appComponent template, add 3 buttons to test the 3 levels of logging 
    ```
      <button (click)="onInfoBtnClicked()">Log Info</button>
      <button (click)="onWarningBtnClicked()" >Log Warning</button>
      <button (click)="onErrorBtnClicked()" >Log Error</button>
    ```
  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/1e721641-ed1b-4750-ad5a-c78b352e7b29)


5. Add 3 event handlers for the 3 buttons inside the AppComponent ts class as follows:

    ```
      onInfoBtnClicked(){
        this.loggingService.log("log information")
      }
    
      onWarningBtnClicked(){
        this.loggingService.warn("log warning")
      }
    
      onErrorBtnClicked(){
        this.loggingService.error("log Error")
      }
    
    ```

 6. build the application and test the behaviour of the three buttons in the console
    
      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/14c1766d-9e73-4e1c-bd27-7157ce3c5a1d)

--------------------------------

To do list
===========
observable services (asynchronous calls)
https://angular.io/tutorial/tour-of-heroes/toh-pt4#observable-heroservice

more advanced topics about injection hiraricy 
https://angular.io/guide/hierarchical-dependency-injection

