import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  form: FormGroup;

  private formDefaults = {
    username: 'default-username',
    email: '',
    gender: 'male'
  };

  genderList = {
    male: 'Male',
    female: 'Female'
  };

  forbiddenUsernamesL = ['admin', 'user', 'test'];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9-_]+$'),
        CustomValidators.forbiddenUsernames
      ]),
      email: new FormControl(null, [Validators.required, Validators.email], [CustomValidators.forbiddenEmailAsync]),
      gender: new FormControl(null, Validators.required)
    });
    this.form.patchValue(this.formDefaults);
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset(this.formDefaults);
  }
}
