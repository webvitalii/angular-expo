import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PostService } from '../../../cms-shared/services/post.service';
import { PostInterface } from '../../../cms-shared/interfaces/post.interface';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  post: PostInterface;
  submitted = false;

  updateSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.postService.getById(params.get('id'));
      })
    ).subscribe((post: PostInterface) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      });
    });
    /* Old way. Params attribute might be deprecated in the future
    https://angular.io/guide/deprecations#activatedroute-params-and-queryparams-properties
    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params.id);
      })
    ).subscribe((post: PostInterface) => {
      this.post = post;
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      });
    }); */
  }

  submit() {
    if (this.form.invalid) {
      return false;
    }

    this.submitted = true;

    this.updateSub = this.postService.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submitted = false;
      console.log('Post was updated.');
    });
  }

  ngOnDestroy() {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }

}
