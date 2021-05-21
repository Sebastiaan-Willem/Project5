import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });
  validationErrors: string[] = [];
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.registerUser.value);
    this.accountService.register(this.registerUser.value).subscribe(
      response => {

    }, error => {
      console.error(error);
      this.validationErrors.push(error);
    });
      this.router.navigate(['signin']);
    
  }

}

