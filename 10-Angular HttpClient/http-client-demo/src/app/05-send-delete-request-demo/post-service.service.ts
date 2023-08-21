import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST } from '../models/post.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  url = 'https://angular-course-p1-default-rtdb.europe-west1.firebasedatabase.app/post4.json'

  constructor(private http: HttpClient) { }

  addPost(post:POST){
    let observable = this.http.post(this.url,
    { title: post.title, content: post.content })
    return observable
  }

  fetchPosts(){
    let subscribtion = this.http.get<{ [key: string]: { title: string, content: string } }>(this.url)
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

      return subscribtion

  }

  deleteAllPosts(){
    return this.http.delete(this.url)
  }
  
}
