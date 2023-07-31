import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, share } from 'rxjs';

@Component({
  selector: 'app-multicast-demo',
  templateUrl: './multicast-demo.component.html',
  styleUrls: ['./multicast-demo.component.css']
})
export class MulticastDemoComponent {

  firstSubscriptionLogs:any[]=[]
  secondSubscriptionLogs:any[]=[]
  firstSubscription:Subscription
  secondSubscription:Subscription

  myObservable:Observable<number>

  ngOnInit(): void {
    /**
     * use share() operator to work with multicast
     */
    this.myObservable = new Observable<number>(observer =>{
      let counter = 0;
      setInterval(()=>{
        observer.next(counter++)
      },1000)
    //    
    }).pipe(share())
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
