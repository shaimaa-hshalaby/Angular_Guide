Directives
===========
Directives are classes that add additional behavior to elements in your Angular applications.
| directive type | description |
|---|---|
| compnent | directive that has a template that add a UI fragment with dynamic functionalities. |
| attribute directives | this type of directives affect the area that they added, either the appearance or the behaviour of the element. [ngClass,ngStyle] are examples of attribute directives.|
| structural directive | these directives affect the dom by adding or removing elements from the dom [*ngFor,*ngIf] examples of structural directives|

---
## Attribute Directives
### Built-in Attribute Directives

-  *NgClass*:	Adds and removes a set of CSS classes.
-  *NgStyle*:	Adds and removes a set of HTML styles.
-  *NgModel*:	Adds two-way data binding to an HTML form element.


  Example of NgClass:

  1. Create a component for this exercise, and add 2 style classes special & not-special to its style file:
     ```
        .special {
            width: 400px;
            background-color: aqua;
        }
        
        .not-special {
            width: 400px;
            background-color: blue;
            color: white;
        }
     ```

  2. Add a boolean property *isSpecial* to the component class as follows:
    
     ```
       isSpecial:boolean = true;
     ```


  3. Add div element to the template and add [ngClass] attribute directive with an expression to set the style to special or not-special
     ```
       <div  [ngClass]="isSpecial?'special':'not-special'"></div>
     ```

  4. add a button to toggle speciality as follows:

     ```
      <button (click)="isSpecial=!isSpecial">Toggle Speciality</button>
     ```

  5. The output should be as the following GIF
     ![Untitled (2500 × 1080 px)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/3f164e03-4fe7-4392-a1f6-f19c42f405ec)

















-  we cannot have more than one structural directive in the same element'
-  structural directive starts with *


## Create our own directive
1. class decorated by @Directive and then specify the selector which is a unique selector
2. constructor has a private argument with type elementRef, the angular is responsible for passing it to the directive constructor. this is a reference of the element that the directive setting on it.
3. add the directive to the declarations in the NgModule file

accessing element directly from the ElementRef is not a good practise, you can use Renderer

## Renderer 
in some cases angular does not access the dom -in some cases angular does not run inside the browser- so accessing the dom may throw errors in such cases.
the better scenario is to access the renderer 
the class is Renderer2
try method setStyle()


** creating directive by ng cli
ng g d <directive_name>

more about renderer 
https://angular.io/api/core/Renderer2


@HostListener() inside the directive

@HostBinding('dom property name') for easier link the renderer properties to attribute

**Binding to Directive properties** --> these properties can be added to the tag as attributes
annotate properties with @Input()


## Create Custom structural directive
-  TemplateRef
-  ViewContainerRef
-  property setter


## ngSwitch
[ngSwitch]="value"
