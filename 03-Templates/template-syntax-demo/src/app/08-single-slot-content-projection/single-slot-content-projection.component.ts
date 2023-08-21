import { AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-slot-content-projection',
  template: `
    <h1> The header of the parent component</h1>
    <ng-content></ng-content>
  `,
  styleUrls: ['./single-slot-content-projection.component.css']
})
export class SingleSlotContentProjectionComponent implements OnInit, AfterViewInit {

  @ContentChild('content') ngContent:ElementRef

  ngOnInit(): void {
    console.log('ngContent in OnInit')
    console.log(this.ngContent)
  }

  ngAfterViewInit(): void {
    console.log('ngContent in AfterViewInit')
    console.log(this.ngContent)
  }
  

}
