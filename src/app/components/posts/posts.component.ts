import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  successMessage: any;

  constructor(private postsService: PostsService, private router: Router) {
    let routeMessage = this.router.getCurrentNavigation()?.extras?.state as {message: string};
    this.successMessage = routeMessage?.message;
  }

  ngOnInit() {
    this.loadPosts();
  }

  addNewPost(){
    this.router.navigate(['/add-post']);
  }

  handleDelete(id:any){
    console.log('ID',id);
    if(confirm("Do you want to delete it?")) {
      this.postsService.deletePost(id).subscribe((response:any)=>{
        console.log('response==',response);
        this.loadPosts();
      })
    }
  }

  loadPosts() {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

}
