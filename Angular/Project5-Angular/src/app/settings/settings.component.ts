import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  user?: User; 

  constructor(
    private accountService: AccountService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.setUser();
  }

  setUser() {
    this.user = this.accountService.getUser();
    //this.userService.getUser(1).subscribe(x => this.user = x);
    console.log(this.user);
  }

  saveChanges(user: User) {
    debugger;
    this.userService.updateUser(user).subscribe(x => this.user = x);
  }

}

