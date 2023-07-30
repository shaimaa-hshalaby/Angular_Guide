import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router,private route:ActivatedRoute){
  }

  loadFirstPage(){
      //this.router.navigate(['/first'])
      this.router.navigate(['first'],{relativeTo:this.route})
  }

}
