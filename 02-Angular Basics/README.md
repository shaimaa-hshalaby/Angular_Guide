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
1.  Create the component files manually by creating a folder inside the app folder and add the component files as shown in the screenshot below, let's call the it *ManualHelloWorldComponent*:
  
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
    
      **selector**:  A selector instructs Angular to instantiate this component wherever it finds the corresponding tag in template HTML, for example, when angular finds *<app-manual-hello-world></app-manual-hello-world>* tag, it will instantiate the ManualHelloWorldComponent in the same place where the tag appears.
      
      **templateUrl**: the path to the component HTML file, or you can use the **template** attribute instead to include the HTML code inside the decorator as follows:
      
        ```
          @Component({
            selector:'app-manual-hello-world',
      
            template:`<h1>Manual Hello World Component</h1>
            <p>creating a template file for the Manual Hello World component</p>`,
      
            styleUrls:['./manual-helloworld.component.css']
        })
        ```
    
    -  A template is a block of HTML that tells Angular how to render the component in your application.
    -  If you want your template to span multiple lines, use backticks (`)
    -  An Angular component requires a template defined using template or templateUrl. You cannot have both statements in a component.
    
      **styleUrls**: an array of CSS files paths, or you can use the **style** attribute instead to include the style code inside the decorator as follows:
     
         ```
        @Component({
            selector:'app-manual-hello-world',
            templateUrl:'./manual-helloworld.component.html',
          
            styles:[`p {
                background-color: bisque;
                color: blue;
            }`]
        })
         ```
    
        
4.  Add the HTML code that represents the component layout to the template file *manual-helloworld.component.html*, as an example:
      ```
        <h1>Manual Hello World Component</h1>
        <p> Creating a template file for the Manual Hello World component</p>
      ```

5. We can add CSS code to *manual-helloworld.component.css*, as an example:
      ```
        p {
            background-color: bisque;
            color: blue;
        }
      ```

6. Add The component to the AppModule inside the *app.module.ts* file as follows:
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/72d7a2b9-2ba5-4fb4-b976-6bf4dc0ca289)
 

7. clear the generated content of the AppComponent's HTML template file *app.component.html* to add our custom code.
8. simply add the tag *<app-manual-hello-world>* that represent *ManualHelloWorldComponent* inside the *app.component.html* file
   
      ```
      <app-manual-hello-world></app-manual-hello-world>
      ```
      this can be represented by the following shape:

    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/a7623703-0180-4c9e-9160-0ad36f7b34e3)

9. open a template, navigate to the project folder, and then run the following command to compile and build the application
      ```
       cd ./hello-angular-world
       ng serve
      ```
10. navigate to http://localhost:4200/, you will find the page includes your ManualHelloWorldComponent
    
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/b1f2303b-943c-418b-8163-39883b5fa04c)

---------------
#### Create Component Using Angular ClI

1. open a terminal, then navigate to the project folder and run one of the following commands:
    ```
     ng generate component <COMPONENT_NAME>
    ```
    
    or the shortcut

    ``` 
     ng g c <COMPONENT_NAME>
    ```
2. Check the generated files by the angular CLI, you will find a Typescript file and empty HTML and CSS files, another file for testing we will discuss later Inshaa Allah:
   
      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/24874697-5d96-4f05-89fd-e7682bb0ebec)

4. Check the content of the Typescript file:
   
      ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/4224cdc7-be83-481a-bffe-4c46c03160d5)

5. by Checking the AppModule file, you will find that the Angular CLI has added the generated Component name to the *declarations* array as follows:
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/0040fc87-4827-48d4-8701-2720c18a6408)     vv  

6. inside the AppComponent HTML template, add the tag name that represents this automatic component as follows:
                                            
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/5bd95627-83af-4af8-9332-0f61dc092a0a)

     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/940e52f4-8406-4139-a8c9-5ff54a4feb56)



8. angular CLI should recompile and rebuild the application automatically as we executed the command *ng serve* before, so navigate to http://localhost:4200
   and check the output

     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/732b208f-a11f-4efd-8a8a-7dc20516cfe3)


   For more details about *ng generate* command and its options, check the documentation link https://angular.io/cli/generate#component-command
   
-----------------

### Component Lifecycle
-  A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views.
-  There are lifecycle hook interfaces, Each interface defines the prototype for a single hook method, whose name is the interface name prefixed with ng. For example, the *OnInit* interface has a hook method named *ngOnInit()*.
-  You don't have to implement all (or any) of the lifecycle hooks, just the ones you need.
-  Lifecycle hook methods called by Angular are shown below:
  
    | HOOK INTERFACE|	HOOK METHOD	| DETAILS | NOTES
    |---|---|---|---|
    | OnChanges |	ngOnChanges(changes: SimpleChanges)	| When an input or output binding value changes.| -  This happens frequently, so any operation you perform here impacts performance significantly.<br /> -  If your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges(). |
    | OnInit |	ngOnInit	| After the first ngOnChanges.|-   Constructors should do no more than set the initial local variables to simple values.<br />-  An ngOnInit() is a good place for a component to fetch its initial data.|
    | DoCheck |	ngDoCheck	| Developer's custom change detection.|---|
    | AfterContentInit |	ngAfterContentInit	| After component content is initialized.|---|
    | AfterContentChecked | ngAfterContentChecked	| After every check of component content.|---|
    | AfterViewInit	 |	ngAfterViewInit	| After the views of a component are initialized.|---|
    | AfterViewChecked |	ngAfterViewChecked	| After every check of the views of a component.|---|
    | OnDestroy |	ngOnDestroy	| Just before the directive is destroyed.|---|


#### OnInit()

  1.  let's create OnInitComponent to check the sequence that angular follow to call hook methods.
  2.  create the Component class which implements *OnInit* interface
  3.  add an implementation of the hook method ngOnInit() that logs some information.
     
       ```
           import { Component } from '@angular/core';
      
            @Component({
              selector: 'app-on-init-component',
              templateUrl: './on-init.component.html',
              styleUrls: ['./on-init.component.css']
            })
            export class OnInitComponent implements OnInit {
      
              constructor(){
                console.log("[OnInitComponent] inside the constructor")
              }
              ngOnInit(): void {
                console.log("[OnInitComponent] inside ngOnInit hook method")
              }
            
            }
      
       ```
    
  4.  add the tag selector of the OnInitComponent to the AppComponent template
     
      ```
        <app-on-init-component></app-on-init-component>
      ```
    
  5. navigate to http://localhost:4200/, and then check the console to find that the *constructor()* of OnInitComponent is called before its *OnInit()* method as shown below:
    
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/c7a277c4-2710-4820-9122-d1d2d0f0b7f4)
    

#### OnChanges()

1. Create OnChangesComponent that implements OnChanges interface.
2. Add an implementation of the hook method *ngOnChange()* that logs the *SimpleChanges* object that is passed by the angular framework when the *ngOnChange()* hook called.
     ```
          import { Component, OnChanges, SimpleChanges, Input} from '@angular/core';

          @Component({
            selector: 'app-on-changes-component',
            templateUrl: './on-changes.component.html',
            styleUrls: ['./on-changes.component.css']
          })
          export class OnChangesComponent implements OnChanges{
            @Input() message:string ='';
          
            constructor(){
              console.log("[OnChangesComponent] inside the constructor")
            }
            ngOnInit(): void {
              console.log("[OnChangesComponent] inside ngOnInit hook method")
            }
          
            ngOnChanges(changes: SimpleChanges): void {
              console.log("[OnChangesComponent] inside ngOnChanges hook method")
              console.log(JSON.stringify(changes))
            }
          
          }

     ```

*SimpleChanges* Class structure is shown below:

![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3618dd33-59ff-40e1-9e82-8f009fe75f36)































--------------------------------------
## Modules 
   



