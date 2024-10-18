import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { PostServiceContract } from './postservicecontract';

@Injectable()
export class PostService implements PostServiceContract {
  private postUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) {

  }
  getPosts(): Observable<Post[]> {
    //const obs: Observable<Object> = this.http.get(this.postUrl)
    const obs: Observable<Post[]> = this.http.get<Post[]>(this.postUrl)
    return obs
  }
  getPost(id: number): Observable<Post> {
    //const obs: Observable<Object> = this.http.get(this.postUrl)
    const obs: Observable<Post> = this.http.get<Post>(`${this.postUrl}/${id}`)
    return obs
  }
}
