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
    userId: this.currentUser.id,
    isNSFW: false,
  };

  constructor(private postService:PostService, private accountService: AccountService, private userService: UserService) { }

  ngOnInit(): void {
    
    this.getPosts();
    let data = localStorage.getItem('userData');
    if(data){
      this.currentUser = JSON.parse(data);
    }
    // this.updateLocalStorage();
    // this.setCurrentUser();
  }

  setCurrentUser(): any {
    let data = localStorage.getItem('userData');
    if(data){
      this.currentUser = JSON.parse(data);
      return this.currentUser;
    }
  }


  getPosts():void{    
    this.postService.getPosts().subscribe(x => this.posts = x)
  }

  addPost(post: Post,){
    if (!post.title.trim()) { return; }
    this.postService.addPost(post).subscribe(x => this.posts.push(x));
    //window.location.reload();
  }

  updateLocalStorage(){
    if(this.currentUser)
    {
      this.userService.getUser(this.currentUser.id)
      .subscribe(x => 
        localStorage.setItem('userData', JSON.stringify(x)));
    }
  }
}
