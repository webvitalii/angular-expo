import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  form: UntypedFormGroup;

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
    this.form = new UntypedFormGroup({
      username: new UntypedFormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9-_]+$'),
        CustomValidators.forbiddenUsernames
      ]),
      email: new UntypedFormControl(null, [Validators.required, Validators.email], [CustomValidators.forbiddenEmailAsync]),
      gender: new UntypedFormControl(null, Validators.required)
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
