import { Component } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-observable-with-interval-demo',
  templateUrl: './create-observable-with-interval-demo.component.html',
  styleUrls: ['./create-observable-with-interval-demo.component.css']
})
export class CreateObservableWithIntervalDemoComponent {

  logs:any[]=[]
  interval_observable:Observable<number> = interval(1000)
  subscription:Subscription

  onSubscribe(){
    this.subscription = this.interval_observable.subscribe(
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
