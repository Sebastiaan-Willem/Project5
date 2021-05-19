import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Language } from './language';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://localhost:44305/api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const users = this.http.get<User[]>(this.usersUrl);
    return users;
  };

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    const user = this.http.get<User>(url);
    return user;
  };

  getLanguages(): Observable<Language[]>{
    const languages = this.http.get<Language[]>(this.usersUrl);
    return languages;
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);
  };

  updateUser(user?: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions);
  };

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions);
  };
}
