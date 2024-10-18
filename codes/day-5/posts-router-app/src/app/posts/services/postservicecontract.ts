import { Observable } from "rxjs";
import { Post } from "../../models/post";

export interface PostServiceContract {
    getPosts(): Observable<Post[]>;
    getPost(id: number): Observable<Post>
}