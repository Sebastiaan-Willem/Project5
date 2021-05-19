import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  
  login():void{
    this.accountService.login(this.model)
    .subscribe(x => {
      this.loggedIn = true;
    }, error =>{
      console.log(error);
    })
  }
}
