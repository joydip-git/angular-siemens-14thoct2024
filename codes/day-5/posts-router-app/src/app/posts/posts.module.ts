import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { provideHttpClient } from '@angular/common/http';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
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
