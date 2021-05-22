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
import { windowTime } from 'rxjs/operators';

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
 
  selectedFile?: ImageSnippet;
  addedPost: Post =
  {
    title:"",
    content:"",
    userId: this.currentUser.id,
    isNSFW: false,
}
  constructor(private userService: UserService, private accountService: AccountService, private postService: PostService,private modalService: NgbModal, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.updateLocalStorage();
    this.setCurrentUser();
  }

  setCurrentUser(): any {
    let data = localStorage.getItem('userData');
    if(data){
      this.currentUser = JSON.parse(data);
      return this.currentUser;
    }
  }

  addPost(post: Post){
    if (!post.title.trim()) { return; }
    this.postService.addPost(post).subscribe(x => this.currentUser.posts.push(x));

  }

  updateLocalStorage(){
    if(this.currentUser)
    {
      this.userService.getUser(this.currentUser.id)
      .subscribe(x => 
        localStorage.setItem('userData', JSON.stringify(x)));
    }
  }

  updatePost(){
  }

  deletePost(post: Post): void{   
    if(post.id){
      this.postService.deletePost(post.id).subscribe(x => window.location.reload());      
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