import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupRequestPayload } from './signup-request.payload';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  signupRequestPayload: SignupRequestPayload;

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
    this.signupRequestPayload = {
      username: "",
      email: "",
      password: ""
    }
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    })
  }

  signup(){
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.username = this.signupForm.get('username').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signupRequestPayload)
      .subscribe( data => {
        this.router.navigate(['/login'], 
        {queryParams: { registered: 'true'} })
      }, error => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      }); 
  }

}
