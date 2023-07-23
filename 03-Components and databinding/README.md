
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
   
   ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/f676a6f2-d52e-44db-840d-5aa99eade913)

5. If you use the browser developer tool to Observe the 

