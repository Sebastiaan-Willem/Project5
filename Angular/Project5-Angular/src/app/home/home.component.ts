import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }
}
