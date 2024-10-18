import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./components/post-list/post-list.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { UpdatePostComponent } from "./components/update-post/update-post.component";

//individual route configuration
// const postRoutes: Routes = [
//   {
//     path: 'posts', component: PostListComponent
//   },
//   {
//     path: 'posts/add', component: AddPostComponent
//   },
//   {
//     path: 'posts/update/:id', component: UpdatePostComponent
//   }
// ]

//nested route configurtaion with prefix style path match
const postRoutes: Routes = [
    {
        path: 'posts', //prefix style
        //pathMatch: 'prefix', => default path match strategy for angular
        children: [
            {
                path: '', component: PostListComponent
            },
            {
                path: 'add', component: AddPostComponent
            },
            {
                path: 'update/:id', component: UpdatePostComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class PostsRoutingModule {

}