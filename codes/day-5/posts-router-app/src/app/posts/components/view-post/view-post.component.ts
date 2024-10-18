import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PostServiceContract } from '../../services/postservicecontract';
import { Subscription } from 'rxjs';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css'
})
export class ViewPostComponent implements OnInit, OnDestroy {
  private getSub?: Subscription;
  errorInfo = ''
  fetchComplete = false
  post?: Post;

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    @Inject('POST_SERVICE_TOKEN')
    private ps: PostServiceContract
  ) {
    console.log('view post....');
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = Number(snapshot.params['id'])
    this.getSub =
      this.ps
        .getPost(id)
        .subscribe({
          next: (responseData) => {
            this.post = responseData
            this.errorInfo = ''
            this.fetchComplete = true
          },
          error: (e) => {
            this.post = undefined
            this.errorInfo = e.message
            this.fetchComplete = true
          }
        })
  }
  ngOnDestroy(): void {
    console.log('view post finalize');
    this.getSub?.unsubscribe()
  }
  navigateTo(id: number) {
    this.router.navigate(['/posts', 'update', id])
  }
}
