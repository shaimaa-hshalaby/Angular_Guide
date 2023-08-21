import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { POST } from '../models/post.model';

@Component({
  selector: 'app-fetch-data-with-spinner-demo',
  templateUrl: './fetch-data-with-spinner-demo.component.html',
  styleUrls: ['./fetch-data-with-spinner-demo.component.css']
})
export class FetchDataWithSpinnerDemoComponent {
  
  title: string = ''
  content: string = ''
  posts:POST[] = []
  isFetching = false

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
    this.isFetching = true
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
        this.posts = responsedata
        setTimeout(()=>{
          this.isFetching = false
       },5000)
        console.log(this.posts)
      //  this.cdr.detectChanges()
      })
    
  }

  
  clearForm() {
    this.title = ''
    this.content = ''
  }



}
