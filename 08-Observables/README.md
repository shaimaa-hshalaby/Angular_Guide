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
Observables can be created using various methods, such as of(), from(), interval(), or by creating custom observables using the Observable class constructor.
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

- **Observable constructor**
  you can create a custom observable using the Observable constructor which accepts the observer as a parameter as follows:
    ```
       myObservable = new Observable<number>(observer =>{
          let counter = 0;
          setInterval(()=>{
            observer.next(counter++)
          },1000)
        //    
        })
     ```
   
### Observer Structure
In RxJS, the Observer class is an interface that defines the structure of an object that can receive notifications from an Observable. It provides three methods: next, error, and complete.

  ![image](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/dfe2d6fe-c614-46dc-a26c-daef20a3c43c)

The next(), error(), and complete() methods in the observer have specific signatures

  #### next(value: any): void 
  The next() method is used to emit a value to the observer. It takes a single parameter value of type any, which represents the value being emitted. The method does not return anything (void).
  
  #### error(error: any): void: 
  The error() method is used to emit an error to the observer. It takes a single parameter error of type any, which represents the error being emitted. The method does not return anything (void).
  
  #### complete(): void: 
  The complete() method is used to indicate that the observable has been completed and will no longer emit any values. It does not take any parameters and does not return anything (void). If the observable calls the complete() method of the observer, the next() method will no longer be called by the observable.

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
-  When you subscribe to an Observable, you provide an object that implements the Observer interface. This object will receive the emitted values, handle errors, and be notified when the Observable completes.
-  To receive values emitted by an observable, you need to subscribe to it. 
-  An Observable instance begins publishing values only when someone subscribes to it.
-  the subscribe() method of the instance, passing an observer object to receive the notifications.
-  the subscribe() method returns an object of type **Subscription** that can be used to unsubscribe the observable when needed

  The following is an example of subscribing on an observable object and passing an observer object that implements the Observer Interface and passes the implementation of the 2 methods next(), and complete()
onSubscribe() function is a click event handler of a button created in the template

  ```
      logs:any[]=[]
      subscription:Subscription
    
      // create observable using of() fucntion imported from rxjs
      observable:Observable<number> = of(1,2,3,4)
    
      onSubscribe(){
        this.subscription = this.observable.subscribe(
          {
            next: value => this.logs.push(value),
            complete: ()=> this.logs.push("of observable completed")
          }
        )
      }
  ```

The behaviour should be as shown in the GIF below:
  ![Untitled design (7)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/2821352a-e41d-41cf-bccd-9e298f702d0f)


### Unsubscribing: 
-  It's important to unsubscribe from an observable when you no longer need to receive its values.
-  This prevents memory leaks and unnecessary processing. You can unsubscribe by calling the unsubscribe() method on the subscription object
returned by the subscribe() method.
-  You can clean up all subscriptions in onDestroy() method of the component instance.


### Error Handling: 
Observables can emit errors, and you can handle them using the error callback in the subscribe() method or by using error-handling operators
like catchError() or retry().

An Example of error handling by using the error callback in the observer object

1. Create an observable that emits an incremented number at specific intervals. Check if the number has reached more than 5, and if so, send an error message to the observer object.
    
   ```
      myObservable = new Observable<number>(observer =>{
        let counter = 0;
        setInterval(()=>{
          if(counter >5){
            observer.error("value could not be more than 10")
          }else{
            observer.next(counter++)
          }
          
        },1000)
      //    
      })
   ```

2. To receive data from the observable, you need to subscribe and provide an observer object that implements the next() and error() functions to handle the received data in every scenario.
    ```
        this.subscription = this.myObservable.subscribe(
          {
            next: value => this.logs.push(value),
            error: err => this.logs.push(err)
          }
        )
    ```

3. After an error is emitted, the observable stops emitting any further values.
4. When an error occurs in an observable, the complete function of the observer is not called.
5. The following GIF demonstrates the behaviour of the previous code.
   
    ![Untitled design (8)](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/65644032-9a30-476a-ad42-6ee6caa21bfd)



### Operators: 
RxJS provides a wide range of operators that can be used to transform, filter, combine, or manipulate the data emitted by an observable.
Operators like map(), filter(), mergeMap(), and switchMap() are commonly used in Angular applications.

### Unicasting 
 When an Observable emits data, each subscriber receives its own independent stream of values. This behaviour is known as unicast, where each subscriber has its own separate execution of the Observable.
the following example demonstrates the unicasting behaviour:
1. Create an observable that emits an incremented number every second as follows:
     ```
       this.myObservable = new Observable<number>(observer =>{
          let counter = 0;
          setInterval(()=>{
            observer.next(counter++)
          },1000)
        //    
        })
     ```
    
2. Add two buttons to the template and create handlers for both. Each button should create a new subscription to the observable.
     ```
      <button (click)="onFirstSubscription()">First Subscription</button>
      <button (click)="onSecondSubscription()">Second Subscription</button>
     ```

     ```
        onFirstSubscription(){
          this.firstSubscription = this.myObservable.subscribe({
            next: value => this.firstSubscriptionLogs.push("First Subscription: "+value)
          })
        }
     ```


     ```
        onSecondSubscription(){
            this.secondSubscription = this.myObservable.subscribe({
              next: value => this.secondSubscriptionLogs.push("Second Subscription: "+value)
            })
          }
     ```

3. The following GIF demonstrates that the unicasting behaviour assigns a separate data source for each subscriber
   
    ![the count strats from zero](https://github.com/shaimaa-hshalaby/Angular_Guide/assets/3264417/32e6ebfa-9982-40b2-8856-b5255040b3e3)



### Multicasting
multicasting refers to the ability to send a single stream of data to multiple subscribers.
It allows you to share the same data stream among multiple components or services, ensuring that each subscriber receives the same values emitted by the source.
-   multicasting is often achieved using the Subject class from the RxJS library.
-   
## To do 
- catchError()
- retry()

