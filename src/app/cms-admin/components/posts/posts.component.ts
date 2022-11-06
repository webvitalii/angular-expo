import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '@core/services/post.service';
import { PostInterface } from '@core/interfaces/post.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: PostInterface[] = [];
  postSub: Subscription;
  deleteSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postSub = this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
    });
  }

  remove(id: string) {
    this.deleteSub = this.postService.remove(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }

    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
