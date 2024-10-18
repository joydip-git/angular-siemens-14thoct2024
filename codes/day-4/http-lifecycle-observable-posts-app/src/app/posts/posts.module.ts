import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    //provideHttpClient()=>Configures Angular's HttpClient service to be available for injection. By default, HttpClient will be configured for injection with its default options for XSRF protection of outgoing requests
    provideHttpClient(),
    {
      provide: 'POST_SERVICE_TOKEN',
      useClass: PostService
    }
  ],
  exports: [PostListComponent]
})
export class PostsModule { }
