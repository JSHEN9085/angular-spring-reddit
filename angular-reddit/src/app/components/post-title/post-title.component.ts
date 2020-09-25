import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/services/classes/post-model'; 
import { PostService } from 'src/app/services/post.service';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {
  
  faArrowUp = faArrowUp; 
  faArrowDown = faArrowDown;
  faComments = faComments; 
  posts: Array<PostModel> = []; 

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(posts => this.posts = posts)
  }

  ngOnInit(): void {
  }

}
