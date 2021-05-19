import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44305/api/Account';
  currentUser?: Login;
 
  constructor(private http: HttpClient) { }

  register(model : any): Observable<any>{
    let url = `${this.baseUrl}/register`;
    return this.http.post( url , model );
  }

  login(model: any): Observable<any>{
    let url = `${this.baseUrl}/login`;

    return this.http.post( url , model )
    .pipe(
      map((response: any) => 
        { const user = response; 
          if(user)
          {
            localStorage.setItem('user', JSON.stringify(user));
            this.setCurrentUser(user);
          }
        })
      );
  }

  setCurrentUser(user: Login){
    this.currentUser = user;
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser = undefined;
  }

}
