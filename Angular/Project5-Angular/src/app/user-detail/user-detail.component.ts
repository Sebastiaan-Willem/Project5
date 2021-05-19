import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user?: User;
  posts: Post[] = [];
  constructor(private userService: UserService, private postService: PostService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }
  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(x => this.user = x);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
  }
}
