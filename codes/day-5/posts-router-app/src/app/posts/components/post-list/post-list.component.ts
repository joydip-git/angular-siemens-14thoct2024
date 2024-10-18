import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../../models/post';
import { Subscription } from 'rxjs';
import { PostServiceContract } from '../../services/postservicecontract';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit, OnDestroy {
  //posts: Post[] | undefined;
  posts?: Post[];
  errorInfo = ''
  fetchComplete = false
  private postsSub?: Subscription;

  constructor(@Inject('POST_SERVICE_TOKEN') private ps: PostServiceContract) {

  }

  ngOnDestroy(): void {
    this.postsSub?.unsubscribe()
  }

  ngOnInit(): void {
    const obs = this.ps.getPosts()
    this.postsSub = obs.subscribe({
      next: (data) => {
        this.posts = data.slice(0, 5)
        this.errorInfo = ''
        this.fetchComplete = true
      },
      error: (e) => {
        this.posts = undefined
        this.errorInfo = e.message
        this.fetchComplete = true
      },
      complete: () => { }
    })
  }
}
