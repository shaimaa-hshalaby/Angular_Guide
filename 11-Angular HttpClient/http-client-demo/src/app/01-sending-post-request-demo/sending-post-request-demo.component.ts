import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { POST } from '../models/post.model';

@Component({
  selector: 'app-sending-post-request-demo',
  templateUrl: './sending-post-request-demo.component.html',
  styleUrls: ['./sending-post-request-demo.component.css']
})
export class SendingPostRequestDemoComponent {
  title: string = ''
  content: string = ''

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post("https://angular-course-p1-default-rtdb.europe-west1.firebasedatabase.app/post.json",
      { title: this.title, content: this.content }).subscribe(response => {
        console.log(response)
      })
    this.clearForm()
    
  }

 

  clearForm() {
    this.title = ''
    this.content = ''
  }

 


}
