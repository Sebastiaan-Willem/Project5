import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.accountService.logout();
    this.loggedIn = false;

    if(!this.loggedIn){
      this.router.navigate(['']);
    }
  }

  login():void{
    this.router.navigate(['signin']);
  }

}
