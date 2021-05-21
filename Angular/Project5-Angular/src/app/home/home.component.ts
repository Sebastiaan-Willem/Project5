import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Language } from '../language';
import { Photo } from '../photo';
import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  currentUser: User = this.accountService.getUser();
  languages: Language[] = this.currentUser.languages;
  photos: Photo[] = this.currentUser.photos;

  @Input() addedPost:Post = {
    title:"",
    content:"",
    userId: 1,
    isNSFW: true,
  };

  constructor(private postService:PostService, private accountService: AccountService, private userService: UserService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }

  addPost(post: Post,){
    if (!post.title.trim()) { return; }
    this.postService.addPost(post).subscribe(x => this.posts.push(x));

  }
}
