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
