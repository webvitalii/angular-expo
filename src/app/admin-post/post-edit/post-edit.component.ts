import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import { NotificationUtil } from '@core/utils/notification.util';
import { PostService } from '@core/services/post.service';
import { PostInterface } from '@core/interfaces/post.interface';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {
  postItem: PostInterface;

  private unsubscribe$ = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute, 
    private postService: PostService, 
    private notificationUtil: NotificationUtil) {
      if (this.activatedRoute.snapshot.queryParamMap.get('action') === 'create') {
        this.notificationUtil.open('Created successfully');
      }
    }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return this.postService.getById(params.get('post_id'));
        })
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((post: PostInterface) => {
        this.postItem = post;
      });
  }

  processFormData($event: any) {
    this.postService
      .update({
        ...this.postItem,
        text: $event?.text,
        title: $event?.title
      })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.notificationUtil.open('Updated successfully');
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
