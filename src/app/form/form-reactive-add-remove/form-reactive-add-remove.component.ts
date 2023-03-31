import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-add-remove',
  templateUrl: './form-reactive-add-remove.component.html',
  styleUrls: ['./form-reactive-add-remove.component.scss']
})
export class FormReactiveAddRemoveComponent implements OnInit {
  form: FormGroup;
  userList = [
    { name: "Jack", phone: "555777" },
    { name: "Jane", phone: "444888" }
  ];

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      userList: new FormArray([])
    });

    this.userList?.forEach((userItem) => {
      this.addUserListControl(userItem);
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    console.log(this.form);
    console.log(this.form.value);
  }

  getUserListControls() {
    return (this.form.get('userList') as FormArray).controls;
  }

  removeUserListControl(controlIndex: number) {
    this.userList?.splice(controlIndex, 1);
    (this.form.get('userList') as FormArray).removeAt(controlIndex);
  }

  addUserListControl(user) {
    const newUserListRow = new FormGroup({
      name: new FormControl(user?.name, [Validators.required]),
      phone: new FormControl(user?.phone, [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])
    });
    (this.form.get('userList') as FormArray).push(newUserListRow);
  }
}
