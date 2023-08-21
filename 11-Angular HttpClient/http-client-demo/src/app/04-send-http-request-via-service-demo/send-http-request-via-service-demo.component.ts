import { Component } from '@angular/core';
import { PostServiceService } from './post-service.service';
import { POST } from '../models/post.model'

@Component({
  selector: 'app-send-http-request-via-service-demo',
  templateUrl: './send-http-request-via-service-demo.component.html',
  styleUrls: ['./send-http-request-via-service-demo.component.css']
})
export class SendHttpRequestViaServiceDemoComponent {

  title: string = ''
  content: string = ''
  posts:POST[] = []

  constructor(private postService:PostServiceService){}


  ngOnInit(): void {
    this.fetchData()
  }

  onSubmit() {
    this.postService.addPost({title: this.title,content: this.content}).subscribe(response =>{
      console.log(response)
      this.fetchData()
    })
    this.clearForm()
   
  }

  fetchData(){

      this.postService.fetchPosts().subscribe(responsedata => {
        this.posts = responsedata
      })
    
  }

  clearForm() {
    this.title = ''
    this.content = ''
  }

}
