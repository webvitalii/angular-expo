import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostInterface } from '../../../cms-shared/interfaces/post.interface';
import { PostService } from '../../../cms-shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<PostInterface>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params.id);
      }));
  }

}
