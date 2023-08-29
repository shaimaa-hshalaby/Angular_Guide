import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn = false
  constructor(private authService:AuthenticationService){

  }

ngOnInit(): void {
  this.authService.authenticatedUserSubject.subscribe({
    next:(user) =>{
      this.isLoggedIn = (user)?true:false;
    }
  })
}

}
