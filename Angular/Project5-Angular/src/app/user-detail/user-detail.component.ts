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
  //currentUser: User = this.accountService.getCurrentUser();
  user: User ={
    id: -1,
    name: "",
    token: "nonsense",
    language: [{id: -1, name: "C#"}],
    photo: [{id: -1, url: ""}],
    profilePicture: "https://placekitten.com/170/170",
  };
  posts: Post[] = [];
  languages: Language[] = [];
  photos: Photo[] = [];
 
  selectedFile?: ImageSnippet;
  userUrl: string = "";

  constructor(private imageService: ImageService, private userService: UserService, private accountService: AccountService, private postService: PostService,private modalService: NgbModal, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPosts();
    this.getUser();
  }

  getUser():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(x => this.user = x);
    this.languages = this.user.language;
    this.photos = this.user.photo;
  }

  getPosts():void{
    this.postService.getPosts().subscribe(x => this.posts = x)
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user).subscribe(() => this.goBack());
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




