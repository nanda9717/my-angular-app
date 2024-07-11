import { Component } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-post-update',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './post-update.component.html',
  styleUrl: './post-update.component.css'
})
export class PostUpdateComponent {
  postId:any;
  postDetail? : any;
  updateForm: any;

  constructor(private route : ActivatedRoute, private router: Router, private postService: PostsService,private fb: FormBuilder){}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['postId'];
    this.getPostDetailById(this.postId)
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.updateForm?.valid) {
      console.log('Form data:', this.updateForm.value);
      this.postService.updatePost(this.postId, this.updateForm.value).subscribe((response:any)=>{
        console.log('response==',response);
        this.router.navigate(['/posts'],{state: { message: 'Post updated successfully'}});
      });
    }
  }

  getPostDetailById(id: number){
    this.postService.getPostById(id).subscribe(res => {
      this.postDetail = res
      this.updateForm = this.fb.group({
        title: [res?.title, Validators.required],
        body: [res?.body, [Validators.required]]
      });
    })
  }
}
