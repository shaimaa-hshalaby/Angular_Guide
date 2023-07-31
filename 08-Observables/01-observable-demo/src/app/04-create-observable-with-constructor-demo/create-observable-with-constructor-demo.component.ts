import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-observable-with-constructor-demo',
  templateUrl: './create-observable-with-constructor-demo.component.html',
  styleUrls: ['./create-observable-with-constructor-demo.component.css']
})
export class CreateObservableWithConstructorDemoComponent {

  logs:any[]=[]
  subscription:Subscription

   // create a simple observable using constructor
   myObservable = new Observable<number>(observer =>{
    let counter = 0;
    setInterval(()=>{
      observer.next(counter++)
    },1000)
  //    
  })

  onSubscribe(){
    this.subscription = this.myObservable.subscribe(
      {
        next: value => this.logs.push(value),
      }
    )
  }

  onUnSubscribe(){
    this.subscription.unsubscribe();
    this.logs=[]
  }


}
