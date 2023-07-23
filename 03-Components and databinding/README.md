

# Data Binding
it is some sort of communication between templates(Html) and typescript code to display dynamic data into the templates
-  string interpolation
    {{  }}
-  property binding
  [html_Atr] = "typescript attribute"
-  event binding
  (event) = "ts method name"
-  two way binding

# Directives 

**ngIf** structural directive which means that it adds and removes elements
**ngIf else**

**ngStyle**
**ngClass**


# Debugger attached to the browser
developer tools -> sources -> webpack -> choose your file and add break point





# Component and Databinding

**property binding**

**binding to custom property**
we know how to bind data to a property in the same component
but how to send data to a property in a nested component
use @input() decorator

**assigning alias to the @input(alias) decorator**

**binding to custom event**
to pass the event out of the component we use
      @Output eventName = new EventEmitter<dataType>()

the event emitter can reach to the outer component or the parent component not the sublings 

### style encapsulation 
angular increase attribute (component id) to each element in the template and css style of the component will be applicable only for the element with that attribute

you can change the behaviour of encapsulation by adding encapsulation attribute to the @Component decorator
there are 3 valid values for this attribute
-  ViewEncapsulation.Emulated // default
-  ViewEncapsulation.None  // the css will affect globally
-  ViewEncapsulation.ShadowDom

## using local reference in a template
you can add #reference_name to the opening tag of any html element, this is a reference that holds the Element with its attributes and values.
this reference can be used only in the template not ts file, you can pass it to ts file as a paramater

## access the dom with @viewChild
1. give the element a ref #ref_name
2. in ts file add property with type ElementRef and decorate it with @viewchild("ref_name")
3. cast it to the real type to be able to extract the values that you want

## <ng-content>
by default angular ignores the content inside the component tag, but if you want angular to consider it, you can use <ng-content>

----------------------

## Angular LifeCycle methods
need to write in details when will each hook called by the angular !!!

