import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers:number[]=[]
  subscrption:Subscription

  constructor(private cdr: ChangeDetectorRef) {}


  // create a simple observable using constructor
  myObservable = new Observable<number>(observer =>{
    let counter = 0;
    setInterval(()=>{
      observer.next(counter++)
    },1000)
  //    
  })


  subscribeOnObservable(){
    // subscribe to the observable and pass an observer value with implementation of next() and complete()
    this.subscrption = this.myObservable.subscribe({
      next: data => {this.numbers.push(data)
   //   this.cdr.detectChanges()
      console.log(this.numbers)}
    })
  }

  unsubscribeOnObservable(){
      this.subscrption.unsubscribe()
      this.numbers=[]
  }

}
