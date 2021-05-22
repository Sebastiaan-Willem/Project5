import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Login } from './login';
import { catchError, map } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44305/api/Account';
  currentUser?: Login;
  user?: User;
 
  constructor(private http: HttpClient, private userService: UserService) { }

  register(model : any): Observable<any>{
    let url = `${this.baseUrl}/register`;
    return this.http.post( url , model ).pipe(catchError(this.handleError));
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
            
            if(this.currentUser){
              this.setUser(this.currentUser.id);
            }
            
          }
        })
      );
  }

  setCurrentUser(user: Login){
    this.currentUser = user;
  }

  setUser(id: number){
    this.userService.getUser(id).subscribe(x => this.user = x);
    localStorage.setItem('userData', JSON.stringify(this.user));
    console.log(this.user);
  }

  getUser(): any{
    if(this.user){
      return this.user;
    }
    else{
      return{};
    }
  }
  // getCurrentUser(): Login{
  //   if(this.currentUser){
  //     return this.currentUser;
  //   }
  // }  
  

  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('userData');
    this.currentUser = undefined;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
