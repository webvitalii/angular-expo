import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-add-remove',
  templateUrl: './form-reactive-add-remove.component.html',
  styleUrls: ['./form-reactive-add-remove.component.scss']
})
export class FormReactiveAddRemoveComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userList: new FormArray([])
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
    return (this.form.get('userList') as FormArray).controls;
  }

  removeUserListControl(controlIndex: number) {
    (this.form.get('userList') as FormArray).removeAt(controlIndex);
  }

  addUserListControl(nameValue, phoneValue) {
    const newUserListRow = new FormGroup({
      name: new FormControl(nameValue, [Validators.required]),
      phone: new FormControl(phoneValue, [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$')
      ]),
    });
    (this.form.get('userList') as FormArray).push(newUserListRow);
  }

}
