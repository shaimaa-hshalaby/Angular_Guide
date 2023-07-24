
### Use @input() to pass data from the parent component to the child component

As an HTML Tree, we call the parent element and the child element to the container element and its content.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/588fce15-df3f-4af5-8e4f-887263a3fe50)

In the same manner, we call the host component the parent component and the nested component the child component 

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3192b5f9-ab12-4d22-a3e2-1dc8e5445321)

For the parent to be able to pass a property value to the child component, there are some steps we must follow:
 ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/73d79188-5d9b-4637-85f7-5d5f03bbd1b1)

  1.  create a child component with a simple HTML template that displays 2 properties *messageBody* & *messageHeader* by string manipulation *{{ property }}*
  2.  decorate the component properties with @Input() to be accessible from outside the component.
     
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

3. you can add alias to the @Input decorator 
     
