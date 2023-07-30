## Observables

observable is a powerful tool used for handling asynchronous operations.
It is a part of the RxJS (Reactive Extensions for JavaScript) library, which provides a set of operators to work with streams of data.
An observable represents a stream of data that can be observed over time.
It can emit multiple values asynchronously and can be subscribed to by multiple observers.

### Observable Creation: 
Observables can be created using various methods, such as of(), from(), interval(), or by creating custom observables using the Observable class.

### Subscribing to Observables:
To receive values emitted by an observable, you need to subscribe to it. 
The subscribe() method is used to subscribe to an observable and provides callbacks for handling emitted values, errors, and completion.

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
