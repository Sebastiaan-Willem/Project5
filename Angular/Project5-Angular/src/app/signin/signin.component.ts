import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }
  
  login():void{
    this.accountService.login(this.model)
    .subscribe(x => {
      this.loggedIn = true;
    }, error =>{
      console.log(error);
    });

    if(this.loggedIn){
      this.router.navigate(['home']);
    }
    
  }
}
