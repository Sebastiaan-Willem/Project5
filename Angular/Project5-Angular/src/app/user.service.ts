import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "https://localhost:44305/api/users";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    const users = this.http.get<User[]>(this.userUrl);
    return users;
  };

  getUser(id: number): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    const user = this.http.get<User>(url);
    return user;
  };

  addUser(user : User): Observable<User>{
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  };

  updateUser(user?: User):Observable<any>{
    return this.http.put(this.userUrl, user, this.httpOptions);
  };

  deleteUser(id: number): Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  };
}
