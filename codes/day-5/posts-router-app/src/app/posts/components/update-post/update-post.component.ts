import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PostServiceContract } from '../../services/postservicecontract';
import { Subscription } from 'rxjs';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent implements OnInit {
  private getSub?: Subscription;
  errorInfo = ''
  fetchComplete = false
  post?: Post;


  constructor(
    private currentRoute: ActivatedRoute,
    @Inject('POST_SERVICE_TOKEN')
    private ps: PostServiceContract
  ) { }
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
}
