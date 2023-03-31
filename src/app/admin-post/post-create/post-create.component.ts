import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PostService } from '@core/services/post.service';
import { PostInterface } from '@core/interfaces/post.interface';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  postItem: PostInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(public router: Router, 
    private postService: PostService) {}

  ngOnInit() {
  }

  processFormData($event: any) {
    const post: PostInterface = {
      title: $event?.title,
      text: $event?.text,
      date: new Date()
    };

    this.postService.create(post)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next:(postResponse) => {
          const routerExtras = {
            queryParams: {
              action: 'create'
            }
          };
          this.router.navigate(['/admin', 'posts', postResponse?.id, 'edit'], routerExtras);
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
