import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../../services/posts.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-add',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
  addForm: any;
  constructor(private fb: FormBuilder,private postService: PostsService, private router: Router){}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.addForm?.valid) {
      console.log('Form data:', this.addForm.value);
      this.postService.addPost(this.addForm.value).subscribe((response:any)=>{
        console.log('response==',response);
        this.router.navigate(['/posts'],{state: { message: 'Post added successfully'}});
      });
    }
  }

}
