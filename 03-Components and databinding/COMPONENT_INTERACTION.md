
### Sharing Data between parent and child components
To share data between parent and child components, we use *@Input()* & *@Output()* decorators.
In this tutorial, we are going to explain how to use these decorators.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/c549391c-1b0a-4e93-aa3f-853c197b420d)


### Use @input() to pass data from the parent component to the child component

As an HTML Tree, we call the parent element and the child element to the container element and its content.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/588fce15-df3f-4af5-8e4f-887263a3fe50)

In the same manner, we call the host component the parent component and the nested component the child component 

 ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3192b5f9-ab12-4d22-a3e2-1dc8e5445321)

For the parent to be able to pass a property value to the child component, the child component property must be marked as accessible from the parent by decorated it by *@Input()* follow the steps to pass value from parent to child:

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
