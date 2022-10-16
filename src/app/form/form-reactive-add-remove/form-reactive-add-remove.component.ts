import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-add-remove',
  templateUrl: './form-reactive-add-remove.component.html',
  styleUrls: ['./form-reactive-add-remove.component.scss']
})
export class FormReactiveAddRemoveComponent implements OnInit {

  form: UntypedFormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      userList: new UntypedFormArray([])
    });
    this.addUserListControl('Jack', 555777);
    this.addUserListControl('Jane', 444888);
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    console.log(this.form);
    console.log(this.form.value);
    // this.form.reset(this.formDefaults);
  }

  getUserListControls() {
    return (this.form.get('userList') as UntypedFormArray).controls;
  }

  removeUserListControl(controlIndex: number) {
    (this.form.get('userList') as UntypedFormArray).removeAt(controlIndex);
  }

  addUserListControl(nameValue, phoneValue) {
    const newUserListRow = new UntypedFormGroup({
      name: new UntypedFormControl(nameValue, [Validators.required]),
      phone: new UntypedFormControl(phoneValue, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$')
      ]),
    });
    (this.form.get('userList') as UntypedFormArray).push(newUserListRow);
  }

}
