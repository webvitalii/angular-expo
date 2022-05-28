import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from '@core/interfaces/post.interface';
import { PostService } from '@core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return false;
    }

    const post: PostInterface = {
      title: this.form.get('title').value,
      text: this.form.get('text').value,
      date: new Date()
    };

    this.postService.create(post).subscribe(() => {
      this.form.reset();
    });
  }

}
