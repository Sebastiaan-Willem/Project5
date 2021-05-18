import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
