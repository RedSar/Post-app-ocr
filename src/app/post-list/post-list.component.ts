import { Component, Input } from "@angular/core";
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';


@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {

  posts$: Observable<Post[]>
  isLiked: boolean;

  constructor(private postService: PostService){
    this.posts$ = this.postService.items$
  }

  handleStatus = (status: boolean) => {
    this.isLiked = status;
  };
}
