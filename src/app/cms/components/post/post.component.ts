import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostInterface } from '@core/interfaces/post.interface';
import { PostService } from '@core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post$: Observable<PostInterface>;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.post$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.postService.getById(params.get('id'));
      })
    );

    /* Old way. Params attribute might be deprecated in the future
    https://angular.io/guide/deprecations#activatedroute-params-and-queryparams-properties
    this.post$ = this.activatedRoute.params
      .pipe(switchMap((params: Params) => {
        return this.postService.getById(params.id);
      })); */
  }
}
