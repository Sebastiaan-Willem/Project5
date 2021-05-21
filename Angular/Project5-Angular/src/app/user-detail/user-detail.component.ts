import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { AccountService } from '../account.service';
import { Language } from '../language';
import { Photo } from '../photo';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from '../image.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  closeModal?: string;
  currentUser: User = this.setCurrentUser();
  
  
  // user: User ={
  //   id: -1,
  //   name: "Doesn't Exist",
  //   languages: [{id: -1, name: "C#"}],
  //   photos: [{id: -1, url: ""}],
  //   posts:[{id: -1, title: "This is a nonsense title", content: "", userId: 1, isNSFW: true, user: this.currentUser}],
  //   profilePicture: "https://placekitten.com/170/170",
  // };

  selectedFile?: ImageSnippet;
  addedPost: Post =
  {
    title:"",
    content:"",
    userId: this.currentUser.id,
    isNSFW: true,
}
  constructor(private userService: UserService, private accountService: AccountService, private postService: PostService,private modalService: NgbModal, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.setCurrentUser();
  }

  setCurrentUser(): any {
    let data = localStorage.getItem('userData');
    if(data){
      this.currentUser = JSON.parse(data);
      return this.currentUser;
    }



  }

  // getPosts():void{
  //   this.postService.getPosts().subscribe(x => this.currentUser.posts = x)
  // }

  addPost(post: Post){
    //debugger;
    this.postService.addPost(post).subscribe(x => this.currentUser.posts.push(x));
    this.postService.getPosts().subscribe(x => this.currentUser.posts = x)
    console.log(this.currentUser)
    //window.location.reload();
    
  }

  updatePost(){
  }

  deletePost(post: Post): void{
    debugger;
    if(post.id){
      this.postService.deletePost(post.id).subscribe();
    }
  }

  triggerModal(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}