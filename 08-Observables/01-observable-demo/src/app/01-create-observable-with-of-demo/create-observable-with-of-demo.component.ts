import { Component } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-observable-with-of-demo',
  templateUrl: './create-observable-with-of-demo.component.html',
  styleUrls: ['./create-observable-with-of-demo.component.css']
})
export class CreateObservableWithOfDemoComponent {
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

  onUnSubscribe(){
    this.subscription.unsubscribe();
    this.logs=[]
  }

}
