
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





