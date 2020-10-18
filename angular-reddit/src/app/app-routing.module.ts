import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CreateSubredditComponent } from './components/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ListSubredditsComponent } from './components/list-subreddits/list-subreddits.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AuthGuard } from 'src/app/auth/auth.guard';

//remember to add <router-outlet></router-outlet> inside app.component.html
const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'posts/:id', component: ViewPostComponent},
  {path: 'list-subreddits', component: ListSubredditsComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'create-subreddit', component: CreateSubredditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
