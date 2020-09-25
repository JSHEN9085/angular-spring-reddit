import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/services/classes/post-model'; 
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = []; 

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts)
  }

  ngOnInit(): void {
  }

}
