import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44305/api/Account';
  currentUser?: User;
 
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
            localStorage.setItem('user', JSON.stringify(user.name, user.token));
            this.setCurrentUser(user);
          }
        })
      );
  }

  setCurrentUser(user: User){
    this.currentUser = user;
  }

  getCurrentUser() : User{
    if(this.currentUser){
      return this.currentUser;
    } else{
      return {
      id: -1,
      name: "Lola",
      token: 'fake-jwt-token',
      language: "C#"
    }
    }
    
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser = undefined;
  }

}
