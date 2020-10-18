import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../../../cms-shared/interfaces/post.interface';
import { PostService } from '../../../cms-shared/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<PostInterface[]>;

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAll();
  }

}
