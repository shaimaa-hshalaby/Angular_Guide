import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { POST } from '../models/post.model';

@Component({
  selector: 'app-sending-get-request-demo',
  templateUrl: './sending-get-request-demo.component.html',
  styleUrls: ['./sending-get-request-demo.component.css']
})
export class SendingGetRequestDemoComponent implements OnInit{

  title: string = ''
  content: string = ''
  posts:POST[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData()
  }

  onSubmit() {
    this.http.post("https://angular-course-p1-default-rtdb.europe-west1.firebasedatabase.app/post2.json",
      { title: this.title, content: this.content }).subscribe(response => {
        console.log(response)
        this.fetchData()
      })
    this.clearForm()
   
  }

  fetchData(){

    let url = "https://angular-course-p1-default-rtdb.europe-west1.firebasedatabase.app/post2.json";

    let subscribtion = this.http.get<{ [key: string]: { title: string, content: string } }>(url)
      .pipe(map(responseData => {
        const postsArr:POST[] = [];
        for (let key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            const post = { id: key, ...responseData[key] };
            postsArr.push(post);
          }
        }
        return postsArr;
      }))

      subscribtion.subscribe(responsedata => {
        console.log("inside subscribe method")
        
        this.posts = responsedata
        console.log(this.posts)
      //  this.cdr.detectChanges()
      })
    
  }

  
  clearForm() {
    this.title = ''
    this.content = ''
  }


}
