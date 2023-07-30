import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passing-fragment-demo',
  templateUrl: './passing-fragment-demo.component.html',
  styleUrls: ['./passing-fragment-demo.component.css']
})
export class PassingFragmentDemoComponent implements OnInit{
  sectionName:string='section-one';

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    let fragment = this.route.snapshot.fragment;
    console.log("fragment is: "+fragment)

    this.route.fragment.subscribe(
      value =>{
        console.log("fragment is: "+value)
      }
    )
  }

}
