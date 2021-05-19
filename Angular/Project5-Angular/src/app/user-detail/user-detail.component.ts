import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { AccountService } from '../account.service';
import { Language } from '../language';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  currentUser: User = this.accountService.getCurrentUser();
  user?: User; 
  posts: Post[] = [];
  languages: Language[] = [];
  constructor(private userService: UserService, private accountService: AccountService, private postService: PostService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }

  getUser(){
    let id = this.currentUser.id;
    this.userService.getUser(id).subscribe(x => this.user = x);
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }
  getCurrentUser(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentUser = this.accountService.getCurrentUser();
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }
}
