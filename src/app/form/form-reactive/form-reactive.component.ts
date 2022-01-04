import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      userList: new FormArray([]),
      newUserListName: new FormControl(null, []),
      newUserListPhone: new FormControl(null, [])
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

  getUserListControls() {
    return (this.form.get('userList') as FormArray).controls;
  }

  removeUserListControl(controlIndex: number) {
    (this.form.get('userList') as FormArray).removeAt(controlIndex);
  }

  addUserListControl() {
    if (this.form.get('newUserListName').value && this.form.get('newUserListPhone').value) {
      const newUserListRow = new FormGroup({
        name: new FormControl(this.form.get('newUserListName').value, [Validators.required]),
        phone: new FormControl(this.form.get('newUserListPhone').value, [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+$')
        ]),
      });
      (this.form.get('userList') as FormArray).push(newUserListRow);
      this.form.get('newUserListName').setValue('');
      this.form.get('newUserListPhone').setValue('');
    }
  }

}
