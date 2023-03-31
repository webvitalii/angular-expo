import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostInterface } from '@core/interfaces/post.interface';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() postInput: PostInterface;
  @Output() formSubmitEvent = new EventEmitter<PostInterface>();

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });

    if (this.postInput?.id) {
      this.form.patchValue(this.postInput);
    }
  }

  submit() {
    if (this.form.invalid) {
      return false;
    }
    this.formSubmitEvent.emit(this.form.value);
  }
}
