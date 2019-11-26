import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder:FormBuilder, private postService: PostService) { }

  ngOnInit() {

    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 _-]*$/)]],
      content: ['', [Validators.required]],
    })
  }

  get f(){
    return this.postForm.controls
  }

  async onSubmit(){
    const title = this.f.title.value;
    const content = this.f.content.value;
    const lovIts = 0;
    const created_at = Date.now()
    try {
     const post= await this.postService.create({title,content, lovIts,created_at})
      
    } catch (err) {
      this.errorMessage = err.message;
    }
  }

}
