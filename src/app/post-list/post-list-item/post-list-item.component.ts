import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PostService } from 'src/app/services/post.service';
import { async } from 'q';

@Component({
  selector: "app-post-list-item",
  templateUrl: "./post-list-item.component.html",
  styleUrls: ["./post-list-item.component.css"]
})
export class PostListItemComponent {
  @Input() key: string;
  @Input() title: string;
  @Input() content: string;
  @Input() lovIts: number;
  @Input() created_at: Date;

  constructor(private postService: PostService) {
   
  }

  getLikes = () => (this.lovIts >= 0 ? this.lovIts : 0);

  getDislikes = () => (this.lovIts < 0 ? this.lovIts : 0);

  getStatus = (): boolean => (this.lovIts > 0 ? true : false);

  getClassesObject = () => ({
    "list-group-item-success": this.getStatus() && this.lovIts !== 0,
    "list-group-item-danger": !this.getStatus() && this.lovIts !== 0
  });

  onLike = async (key:string) => {
    this.lovIts++;
    await this.postService.update(key,{lovIts:this.lovIts})
  };
  onDislike = async (key:string) => {
    this.lovIts--;
    await this.postService.update(key,{lovIts:this.lovIts})

  };

 onDelete=async(key:string)=>{
    await this.postService.delete(key)
  }
}
