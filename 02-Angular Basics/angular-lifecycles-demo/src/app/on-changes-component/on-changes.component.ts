import { Component, OnChanges, OnInit, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-on-changes-component',
  template:'<p>{{message}}</p>'
})
export class OnChangesComponent implements OnInit, OnChanges{
  @Input() message:string ='';

  constructor(){
    // console.log("[OnChangesComponent] inside the constructor")
  }
  ngOnInit(): void {
    // console.log("[OnChangesComponent] inside ngOnInit hook method")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("[OnChangesComponent] inside ngOnChanges hook method")
    console.log(JSON.stringify(changes))
  }

}
