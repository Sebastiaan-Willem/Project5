import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'https://localhost:44305/api/post';
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user') || '{}').token}`
    })
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    const posts = this.http.get<Post[]>(this.postsUrl);
    return posts;
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions);
  };

  updatePost(post?: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions);
  };

  deletePost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, this.httpOptions);
  };
}
