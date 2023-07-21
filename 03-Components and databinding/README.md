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
