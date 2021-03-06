import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/services/classes/post-model';
import { faArrowUp, faArrowDown, faComments } from '@fortawesome/free-solid-svg-icons'
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { VoteService } from 'src/app/services/vote.service';
import { ToastrService } from 'ngx-toastr';
import { VotePayload } from 'src/app/services/classes/vote-payload';
import { VoteType } from 'src/app/services/classes/vote-type';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel; 
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  votePayload: VotePayload;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;

  constructor(private voteService: VoteService,
              private authService: AuthService,
              private postService: PostService, 
              private toastr: ToastrService) 
  {

    this.votePayload = {
      voteType: undefined,
      postId: undefined
    };
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);

  
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost(){
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }
  
  downvotePost(){
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      if(this.votePayload.voteType == 1){
        this.toastr.error("You have downvoted this post")
      } else {
        this.toastr.error("You have upvoted this post")
      }      
      // this.toastr.error(error.error.message);
      // throwError(error);
    });
  }

  private updateVoteDetails() {
    this.postService.getPost(this.post.id).subscribe(post => {
      this.post = post;
    });
  }
}
