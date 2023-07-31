import { Component } from '@angular/core';
import { Observable,from, Subscription} from 'rxjs';

@Component({
  selector: 'app-create-observable-with-from-demo',
  templateUrl: './create-observable-with-from-demo.component.html',
  styleUrls: ['./create-observable-with-from-demo.component.css']
})
export class CreateObservableWithFromDemoComponent {

  logs:any[]=[]
  subscription:Subscription

  // create observable using from() fucntion imported from rxjs
  strs:string[] =['hello','world','from','observable']
  from_observable:Observable<string> = from(this.strs)

  onSubscribe(){
    this.subscription = this.from_observable.subscribe(
      {
        next: value => this.logs.push(value),
        complete: ()=> this.logs.push("observable completed")
      }
    )
  }

  onUnSubscribe(){
    this.subscription.unsubscribe();
    this.logs=[]
  }
  


}
