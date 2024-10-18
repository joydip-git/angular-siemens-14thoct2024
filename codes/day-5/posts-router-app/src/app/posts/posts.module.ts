import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { provideHttpClient } from '@angular/common/http';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    UpdatePostComponent,
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule
  ],
  providers: [
    provideHttpClient(),
    {
      provide: 'POST_SERVICE_TOKEN',
      useClass: PostService
    }
  ]
})
export class PostsModule { }
