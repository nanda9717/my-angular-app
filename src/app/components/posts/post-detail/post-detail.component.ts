import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  postId:any;
  postDetail? : any;

  constructor(private route : ActivatedRoute, private postService: PostsService){}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['postId'];
    this.getPostDetailById(this.postId)
  }

  getPostDetailById(id: number){
    this.postService.getPostById(id).subscribe(res => {
      this.postDetail = res
    })
  }
}
