## Observables

-  An observable is a powerful tool used for handling asynchronous operations.
-  It is a part of the RxJS (Reactive Extensions for JavaScript) library which is imported by default in Angular, which provides a set of operators to work with streams of data. So you need to import it from rxjs to be able to work with it.
```
  import { of, Observable, Subscription } from 'rxjs';
```
-  An observable represents a stream of data that can be observed over time.
-  It can emit multiple values asynchronously and can be subscribed to by multiple observers.
-  An observable can deliver multiple values of any type —literals, messages, or events, depending on the context.
-  Observable is a generic class and you can specify the type of the values that it will emit during the declaration of the Observale object as follows:
  ```
    myObservable:Observable<number> 
  ```

To understand Angular Observables, we need to understand the observer *design pattern*

### Observer Design pattern
The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
The observers can subscribe or unsubscribe from the subject-object by calling its methods 

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/6f3428ab-dc95-4297-947e-87c7b1005a2e)


### Observable Creation: 
Observables can be created using various methods, such as of(), from(), interval(), or by creating custom observables using the Observable class.
  -  **of():**
   The of() operator creates an Observable that emits a sequence of values that you provide as arguments. It emits the values synchronously and completes immediately after emitting all the values. you should import the operator and then use it as follows:
     ```
       import { Observable, of} from 'rxjs';
     ```
   
      ```
        observable:Observable<number> = of(1,2,3,4)
      ```

  -  **from():**
   The from() operator creates an Observable from an array, an iterable, a Promise, or an Observable-like object. It emits each item from the source one by one and completes when all items have been emitted. you should import the operator and then use it as follows:
     ```
       import { Observable, from} from 'rxjs';
     ```
     
     ```
      strs:string[] =['hello','world','from','observable']
      from_observable:Observable<string> = from(this.strs)
     ```

  -  **interval():** The interval() operator returns an Observable that emits an infinite sequence of ascending integers, with a constant interval of time of your choosing between those emissions. The first emission is not sent immediately, but only after the first period has passed. you should import the operator and then use it as follows:
     ```
       import { Observable, interval} from 'rxjs';
     ```
     ```
       interval_observable:Observable<number> = interval(1000)
     ```

### Operators: 
RxJS provides a wide range of operators that can be used to transform, filter, combine, or manipulate the data emitted by an observable.
Operators like map(), filter(), mergeMap(), and switchMap() are commonly used in Angular applications.

### Unsubscribing: 
It's important to unsubscribe from an observable when you no longer need to receive its values.
This prevents memory leaks and unnecessary processing. You can unsubscribe by calling the unsubscribe() method on the subscription object
returned by the subscribe() method.

### Error Handling: 
Observables can emit errors, and you can handle them using the error callback in the subscribe() method or by using error handling operators
like catchError() or retry().

### Observer Structure
The next(), error(), and complete() methods in the observer have specific signatures

  #### next(value: any): void 
  The next() method is used to emit a value to the observer. It takes a single parameter value of type any, which represents the value being emitted. The method does not return anything (void).
  
  #### error(error: any): void: 
  The error() method is used to emit an error to the observer. It takes a single parameter error of type any, which represents the error being emitted. The method does not return anything (void).
  
  #### complete(): void: 
  The complete() method is used to indicate that the observable has been completed and will no longer emit any values. It does not take any parameters and does not return anything (void).

  ### Observer Declaration Example:

  ```
    observer = {
      next: (value: any) => {
        // Handle the emitted value
      },
      error: (error: any) => {
        // Handle the emitted error
      },
      complete: () => {
        // Handle the completion of the observable
      }
    };
  
  ```

### Subscribing to Observables:
-  To receive values emitted by an observable, you need to subscribe to it. 
-  An Observable instance begins publishing values only when someone subscribes to it.
-  the subscribe() method of the instance, passing an observer object to receive the notifications.
-  
