import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'src/app/services/classes/post-model';
import { PostService } from 'src/app/services/post.service';
import { CommentPayload } from 'src/app/services/classes/comment.payload'; 
import { CommentService } from 'src/app/services/comment.service'; 

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  postId: number; 
  post: PostModel = new PostModel; 
  commentForm: FormGroup;
  commentPayload: CommentPayload = new CommentPayload;
  comments: CommentPayload[];

  constructor(private postService: PostService, 
              private activateRoute: ActivatedRoute,
              private commentService: CommentService,
              private router: Router) {
    this.postId = this.activateRoute.snapshot.params.id;

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    
    this.commentPayload = {
      text: '',
      postId: this.postId
    };
  }

  ngOnInit(): void { 
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    console.log(this.commentPayload);
    
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    })
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
      console.log(this.comments);
      
    }, error => {
      throwError(error);
    });
  }

}
