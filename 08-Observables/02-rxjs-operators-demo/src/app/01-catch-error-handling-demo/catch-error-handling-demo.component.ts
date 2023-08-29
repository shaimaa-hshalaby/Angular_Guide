import { Component } from '@angular/core';
import { Observable, catchError, of, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error-demo',
  templateUrl: './catch-error-handling-demo.component.html',
  styleUrls: ['./catch-error-handling-demo.component.css']
})
export class CatchErrorDemoComponent {

 source = new Observable(obs => {
   let stream:any[] = [1,2,3,4,5,'not a number',6,7,8]
   stream.forEach((val) => {
    if(typeof(val) === 'number') {
      obs.next(val)
    }else{
      throw new Error("The value is not a number")
    }
  })
  obs.complete()
 })

 safeSource = this.source.pipe(
  catchError(error => {
    console.error('Catch Error method:', error);
    return of(-1); 
  })
 )

 safeSourceWithRetry = this.source.pipe(
  catchError(error => {
    console.error('Catch Error method:', error);
    return of(-1); 
  })
 ).pipe(retry(3))

 onSubscribe(){
  this.source.subscribe({
    next: (value) => {
      console.log(value)
    }
    ,error: (err) => console.error(err)
    ,complete: () => console.log("the stream is completed")
  })
 }

 onSafeSubscribe(){
  this.safeSource.subscribe({
    next: (value) => {
      console.log(value)
    }
    ,error: (err) => console.error("observer error : "+err)
    ,complete: () => console.log("the stream is completed")
  })
 }

 onSafeWithRetrySubscribe(){
  this.safeSourceWithRetry.subscribe({
    next: (value) => {
      console.log(value)
    }
    ,error: (err) => console.error("observer error : "+err)
    ,complete: () => console.log("the stream is completed")
  })
 }

}
