
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
