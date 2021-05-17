import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user?: User;
  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
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
