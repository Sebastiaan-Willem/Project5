import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(x => this.users = x);
  }

  addUser(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User).subscribe(x => this.users.push(x));
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(x => x !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}
