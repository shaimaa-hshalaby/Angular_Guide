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
