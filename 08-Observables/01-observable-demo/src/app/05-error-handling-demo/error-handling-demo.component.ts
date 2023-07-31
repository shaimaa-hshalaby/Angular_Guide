import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-error-handling-demo',
  templateUrl: './error-handling-demo.component.html',
  styleUrls: ['./error-handling-demo.component.css']
})
export class ErrorHandlingDemoComponent {

  logs:any[]=[]
  subscription:Subscription

   // create a simple observable using constructor
   myObservable = new Observable<number>(observer =>{
    let counter = 0;
    setInterval(()=>{
      if(counter >5){
        observer.error("value could not be more than 5")
      }else{
        observer.next(counter++)
      }
      
    },1000)
  //    
  })

  onSubscribe(){
    this.subscription = this.myObservable.subscribe(
      {
        next: value => this.logs.push(value),
        error: err => this.logs.push(err)
      }
    )
  }

  onUnSubscribe(){
    this.subscription.unsubscribe();
    this.logs=[]
  }


}
