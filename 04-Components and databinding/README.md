
### Sharing Data between parent and child components
We use *@Input()* & *@Output()* decorators to share data between parent and child components.
In this tutorial, we are going to explain how to use these decorators.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/c549391c-1b0a-4e93-aa3f-853c197b420d)


### Use @input() to pass data from the parent component to the child component

As an HTML Tree, we call the parent and child element to the container element and its content.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/588fce15-df3f-4af5-8e4f-887263a3fe50)

In the same manner, we call the host component the parent component, and the nested component the child component 

 ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3192b5f9-ab12-4d22-a3e2-1dc8e5445321)

In order for parents to pass property values to child components, the child component property must be marked as accessible from the parent by using the *@Input()* decorator. Follow these steps to pass a value from the parent to the child:

 ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/73d79188-5d9b-4637-85f7-5d5f03bbd1b1)

  1.  create a child component that has  properties *messageBody* & *messageHeader*.
      ```

       export class ChildComponentComponent {
            
              messageHeader:string=''
              messageBody:string='';
            
            }

       ```
     
  3.  add an HTML code to its template to display values of the 2 properties by string manipulation *{{ property }}*

      ```   
           @Component({
              selector: 'app-child-component',
              template: `
              <h1>{{messageHeader}}</h1>
              <p>{{messageBody}}</p>
              `
            })
      ```
     
  5.  decorate the component properties with @Input() to be accessible from the parent component.
     
          ```
             @Input() messageHeader:string=''
             @Input() messageBody:string='';
          ```


7. you can add an alias to the @Input() decorator to be used by the parent component instead of the original property name. For example, we have added *msgBody* as an alias for the property *messageBody* so the parent component will use the alias msgBody to access this property

      ```
         @Input() messageHeader:string=''
         @Input('msgBody') messageBody:string='';
      ```

9. below is the complete code of the Child component
     
      ```
          import { Component, Input } from '@angular/core';
          
          @Component({
            selector: 'app-child-component',
            template: `
            <h1>{{messageHeader}}</h1>
            <p>{{messageBody}}</p>
            `
          })
          export class ChildComponentComponent {
          
            @Input() messageHeader:string=''
            @Input('msgBody') messageBody:string='';
          
          }
      ```

10. create a parent component which has 2 properties also
     ```
          import { Component } from '@angular/core';
          
          @Component({
            selector: 'app-parent-component',
            templateUrl: './parent-component.component.html'
          })
          
          export class ParentComponentComponent {
            headerMsg:string='Header Value from the parent'
            bodyMsg:string='Body value from the parent'
          
          }
      ```
   
11. Create the parent component html template file *parent-component.component.html* and add the following HTML code to it
     ```
  
          <app-child-component [messageHeader]="headerMsg" [msgBody]="bodyMsg">
      
          </app-child-component>
  
     ```
10. add the following HTML code to the root component template *app.component.html*
     ```
         <app-parent-component></app-parent-component>
     ```
11. build the project and navigate to the http://localhost:4200/, you will find the values inside the parent class have been passed to the child html template.
9. the following image clarifies how the angular process passes the values from the parent component to the nested components
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/48ce5232-59a1-4282-a139-85164cff4b3b)

#### Intercept input property changes with a setter

If you need to have control over the injecting property value process to apply a validation or add some related info, you should follow the following steps:
  1. make the property private
  2. add setter and getter to the property
  3. decorate the setter method with *@input()* instead of decorating the property itself.
  4. below is the upgraded version of the ChildComponent class

       ```
            export class ChildComponentComponent {
            
              @Input() 
                set messageHeader(messageHeader:string){
                  this._messageHeader = messageHeader;
                }
                get messageHeader(){
                  return this._messageHeader
                }
                private _messageHeader:string=''
            
              @Input('msgBody') 
              set messageBody(messageBody:string){
                this._messageBody = messageBody;
              }
              get messageBody(){return this._messageBody}
              private _messageBody:string='';
            
            }
    
       ```

------------------------

## Sending data from a child component to a parent component

-  The child component uses the @Output() property to raise an event to notify the parent of the change
-  Output properties are used to emit events from a child component to its parent component.
-   This allows communication between components in a unidirectional flow, where the child component can notify the parent component about certain actions or changes.
-  The property decorated with @Output() should be of the type EventEmitter<T>
-  EventEmitter<T> is generic, So when you create a property of this type, you should specify the type of data this event is going to carry.

Here is an Example of interaction using @Output()

1. Use Angular CLI to create ParentComponent & ChildComponent using the following commands
   ```
    ng g c child
    ng g c parent
   ```
2. add an input and button to the template of the child component, here is the code
   ```
      <h3> Child Component </h3>
      <div>
          <input type="text" placeholder="enter new name" #name><br>
          <button (click)="addNewName(name.value)">Add</button>
      </div>
   ```
 
   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/a9df0ffd-12f2-4d9a-9bfa-f32e13813e70)

3. In the ChildComponent ts class, add a property of type EventEmitter<string> and decorate it with @Output(), you should import @Output decorator from '@angular/core':
   ```
    @Output() newNameAdded = new EventEmitter<string>()
   ```

4. Add a handler to the button that emits the EventEmitter property and sent the added name as an event data, here is the implementation:
   ```
    addNewName(name:string){
      this.newNameAdded.emit(name)
    }
   ```

5. In the ParentComponent ts class, add a property of type list of strings to hold all emitted names from the child component
   ```
    names:string[] = []
   ```

6. In the Parent Component html template, add the following code to loop via the names list and print it in an unordered list
   ```
    <h4>Registered Names</h4>
    <ul>
        <li *ngFor="let name of names">{{name}}</li>
    </ul>
   ```
-----------------------
## View encapsulation
-    In Angular, a component's styles can be encapsulated within the component's host element so that they don't affect the rest of the application.
-    The default mode is *ViewEncapsulation.Emulated*
-    Add *encapsulation* attribute to *@Component()* decorator to specify which encapsulation mode will be activated.
-    There are 3 valid encapsulation modes as show in the table below
  

|     ENCAPSULATION MODE     |     DETAILS    |
|---|---|
|    ViewEncapsulation.Emulated    |   The component styles are only applied to the component's view and do not affect other elements in the application, emulating Shadow DOM behaviour.|
|    ViewEncapsulation.ShadowDom    | Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot.<br /> When Angular was created; most browsers were not supporting Shadow Dom.|
|    ViewEncapsulation.None     |  Any styles specified for the component are actually globally applied and can affect any HTML element present within the application.|


### ViewEncapsulation.Emulated

1. Create *ViewEncapsulationEmulatedComponent* and specify encapsulation type in the *@Component()* decorator with Emulated - it is not necessary because it is the default -as follows:
   
    ```
        import { Component, ViewEncapsulation } from '@angular/core';
        @Component({
          selector: 'app-view-encapsulation-emulated',
          template: `<p>paragraph inside ViewEncapsulationEmulatedComponent</p>`,
          styles: [
            `
             p {
                background-color: pink;
             }
            `
          ],
          encapsulation: ViewEncapsulation.Emulated
        })
        
        export class ViewEncapsulationEmulatedComponent {
        
        }

    ```

2. Add the following code to the root component template *app.component.html*

    ```
       <app-view-encapsulation-emulated></app-view-encapsulation-emulated>
       <p>paragraph outside the view-encapsulation-emulated component</p>
    ```

3. run the application with the command
   
    ```
      ng serve
    ```
    
4. navigate to http://localhost:4200/, and observe the style difference between the paragraph written inside the *ViewEncapsulationEmulatedComponent* and the paragraph written outside it. 
   
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/231a2076-af6d-4ba8-9a58-d03a45ad8588)


5. If you use the browser developer tool, you can observe that the angular added an attribute which represents the component's unique identifier to the whole elements in each component view templates. and also changes the component's styles to include this attribute as shown in the screenshots below:
   
   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/4162c554-b218-44a7-9c91-9070cdef2c64)

   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/ac492952-6f90-4109-818c-4df665d87de5)

6. Those attributes are the reason why the styles of each component don’t leak out to other components.

-----

### ViewEncapsulation.ShadowDom 

1. Create *ViewEncapsulationShadowDomComponent* and specify encapsulation type in the *@Component()* decorator with *ViewEncapsulation.ShadowDom*, then add a style to the heading tag h2 inside the component styles attribute as follows:
   
    ```
          import { Component, ViewEncapsulation } from '@angular/core';

          @Component({
            selector: 'app-view-encapsulation-shadow-dom',
            template: `<h2>heading 2 inside the view-encapsulation-shadow-dom component</h2>`,
            styles: [
              `
               h2 {
                  background-color: green;
               }
              `
            ],
            encapsulation: ViewEncapsulation.ShadowDom
          })
          export class ViewEncapsulationShadowDomComponent {
          
          }
    ```

2. Add the following code to the root component template *app.component.html*

    ```
      <app-view-encapsulation-shadow-dom></app-view-encapsulation-shadow-dom>
      <h2>heading 2 outside the view-encapsulation-shadow-dom component</h2>
    ```

3. run the application, and navigate to http://localhost:4200/.
   
    
4. observe the style difference between the heading h2 written inside the *ViewEncapsulationShadowDomComponent* and the heading h2 written outside it. 
   
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/9b517b4f-72c0-4101-864f-06be7bc31ee7)


5. If you use the browser developer tool, you can observe that the angular added the heading tag h2 that is written inside the component under a **#shadow-root** element which encapsulates the styles and prevent them from leaking out. (this depends on the native ShadowDOM APIs)
and The styles of components are only added to the shadow DOM host, ensuring that they only affect elements within their respective components' views.
   
   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/72599eb7-94e1-422e-a25d-bede5fcd4f2a)

-----

### ViewEncapsulation.None

1. Create *ViewEncapsulationNoneComponent* and specify encapsulation type in the *@Component()* decorator with *ViewEncapsulation.None*, then add a style to the heading tag h1 inside the component styles attribute as follows:
   
    ```
          import { Component, ViewEncapsulation } from '@angular/core';

          @Component({
            selector: 'app-view-encapsulation-none',
            template: `<h1>heading inside the view-encapsulation-none component</h1>`,
            styles: [
              `
               h1 {
                  background-color: yellow;
               }
              `
            ],
            encapsulation: ViewEncapsulation.None
          })
          export class ViewEncapsulationNoneComponent {
          
          }
    ```

2. Add the following code to the root component template *app.component.html*

    ```
      <app-view-encapsulation-none></app-view-encapsulation-none>
      <h1>heading outside the view-encapsulation-none component</h1>
    ```

3. run the application, and navigate to http://localhost:4200/.
   
    
4. observe the style difference between the heading h1 written inside the *ViewEncapsulationNoneComponent* and the heading h1 written outside it, you will find that both of them have the same style which means that the style is applied globally and not specified only to the components' elements
   
    ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/cab1fcad-54f5-43af-ba07-4e3002342bfd)



5. Using the browser developer tools again, you will find that the angular does not add the component identifier to the style like the Emulate mode
   
     ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/a6a64736-f911-4a07-9d33-15deeb5f1925)

--------------------------------------------------

