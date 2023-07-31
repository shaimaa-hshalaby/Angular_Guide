import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'unicast-demo',
  templateUrl: './unicast-demo.component.html',
  styleUrls: ['./unicast-demo.component.css']
})
export class UnicastingDemoComponent implements OnInit,OnDestroy {

  firstSubscriptionLogs:any[]=[]
  secondSubscriptionLogs:any[]=[]
  firstSubscription:Subscription
  secondSubscription:Subscription

  myObservable:Observable<number>

  ngOnInit(): void {
    this.myObservable = new Observable<number>(observer =>{
      let counter = 0;
      setInterval(()=>{
        observer.next(counter++)
      },1000)
    //    
    })
  }

  onFirstSubscription(){
    this.firstSubscription = this.myObservable.subscribe({
      next: value => this.firstSubscriptionLogs.push("First Subscription: "+value)
    })
  }

  onSecondSubscription(){
    this.secondSubscription = this.myObservable.subscribe({
      next: value => this.secondSubscriptionLogs.push("Second Subscription: "+value)
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe()
    this.secondSubscription.unsubscribe()
  }

}
