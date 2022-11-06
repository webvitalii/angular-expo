import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PostInterface } from '@core/interfaces/post.interface';
import { PostService } from '@core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  form: UntypedFormGroup;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      title: new UntypedFormControl(null, Validators.required),
      text: new UntypedFormControl(null, Validators.required)
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
