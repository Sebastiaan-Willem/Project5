import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Language } from '../language';
import { Photo } from '../photo';
import { Post } from '../post';
import { PostService } from '../post.service';
import { User } from '../user';

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
  constructor(private postService:PostService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }
}
