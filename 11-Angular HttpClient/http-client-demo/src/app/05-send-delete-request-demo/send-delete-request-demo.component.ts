import { Component } from '@angular/core';
import { PostServiceService } from './post-service.service';
import { POST } from '../models/post.model'

@Component({
  selector: 'app-send-delete-request-demo',
  templateUrl: './send-delete-request-demo.component.html',
  styleUrls: ['./send-delete-request-demo.component.css']
})
export class SendDeleteRequestDemoComponent {
  
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


  onDeletePosts(){
    console.log("inside ondeleteposts")
    this.postService.deleteAllPosts().subscribe(()=>{
      console.log("delete callback : ")
      this.posts = []
    })
  }



}
