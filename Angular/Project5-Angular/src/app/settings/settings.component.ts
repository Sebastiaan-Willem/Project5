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

  user?: User = this.accountService.getUser(); 

  constructor(
    private accountService: AccountService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.updateLocalStorage();
    this.setUser();
  }

  setUser(): any {
    let data = localStorage.getItem('userData');
    if(data){
      this.user = JSON.parse(data);
      return this.user;
    }
  }

  updateLocalStorage(){
    if(this.user)
    {
      this.userService.getUser(this.user.id)
      .subscribe(x => 
        localStorage.setItem('userData', JSON.stringify(x)));
    }
  }

  saveChanges(user: User) {
    
    this.userService.updateUser(user).subscribe();
  }

}

