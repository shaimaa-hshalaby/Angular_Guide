import { Component } from '@angular/core';
import { interval, map, retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ngOnInit() {
  //   interval(1000)
  //     .pipe(
  //       map(val => {
  //         if (val > 2) throw new Error("Invalid Value");
  //         return val;
  //       }),
  //       retry(2)
  //     )
  //     .subscribe({
  //      next: (val) => console.log(val),
  //      error: (err) => console.log(err),
  //      complete: () => console.log("Complete")
  // });
  // }
}
