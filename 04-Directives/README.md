Directives
===========

-  attribute directives ==> affect the area that they added [ngClass,ngStyle] are examples of attribute directives
-  structural directive ==> affect the dom [*ngFor,*ngIf] examples of structural directives

-  we cannot have more than one structural directive in the same element'
-  structural directive starts with *


## Create our own directive
1. class decorated by @Directive and then specify the selector which is a unique selector
2. constructor has a private argument with type elementRef, the angular is responsible for passing it to the directive constructor. this is a reference of the element that the directive setting on it.
3. add the directive to the declarations in the NgModule file

accessing element directly from the ElementRef is not a good practise, you can use Renderer

## Renderer 
