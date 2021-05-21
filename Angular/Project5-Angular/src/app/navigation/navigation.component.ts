import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { User } from '../user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;
  currentUser? : User = this.accountService.getUser();
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    let data = localStorage.getItem('userData');
    if(data){
      this.currentUser = JSON.parse(data);
      this.loggedIn = true;
    }
  }

  logout(): void {
    this.accountService.logout();
    this.loggedIn = false;
      this.router.navigate(['']);
  }

  login():void{
    this.router.navigate(['signin']);
  }

}
