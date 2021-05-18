import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from './mock-posts';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]>{
    const posts = of(POSTS);
    return posts;
  }
}
