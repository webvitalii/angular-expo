import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  @Output() userDataEvt = new EventEmitter<object>();

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

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9\-\_]+$'),
        CustomValidators.forbiddenUsernames
      ]),
      email: new FormControl(null,
        [
          Validators.required,
          Validators.email
        ],
        [CustomValidators.forbiddenEmailAsync]
      ),
      gender: new FormControl(null, Validators.required),
      tags: new FormArray([])
    });
    this.form.patchValue(this.formDefaults);
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    // this.userDataEvt.emit(this.form.value);
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset(this.formDefaults);
  }

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  getTagControls() {
    return (<FormArray> this.form.get('tags')).controls;
  }

  removeTagControl(tagControlIndex: number) {
    (<FormArray> this.form.get('tags')).removeAt(tagControlIndex);
  }

  addTagControl() {
    const tagControl = new FormControl('', Validators.required);
    (<FormArray> this.form.get('tags')).push(tagControl);
  }

}
