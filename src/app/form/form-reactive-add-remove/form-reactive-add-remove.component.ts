import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

interface User {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-form-reactive-add-remove',
  templateUrl: './form-reactive-add-remove.component.html',
  styleUrls: ['./form-reactive-add-remove.component.scss']
})
export class FormReactiveAddRemoveComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userList: new FormArray([])
  });
  
  userList: User[] = [
    { name: "Jack", phone: "555777" },
    { name: "Jane", phone: "444888" }
  ];

  constructor() {}

  ngOnInit(): void {
    this.populateForm();
  }

  get userListFormArray(): FormArray {
    return (this.form.get('userList') as FormArray);
  }

  populateForm(): void {
    // clear userList in case we need to populate form again
    this.userListFormArray.clear();
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

  removeUserListControl(controlIndex: number) {
    this.userList?.splice(controlIndex, 1);
    this.userListFormArray.removeAt(controlIndex);
  }

  addUserListControl(user: User | null) {
    if (!user) {
      user = { name: '', phone: '' };
    }
    const newUserListRow = new FormGroup({
      name: new FormControl(user?.name, [Validators.required]),
      phone: new FormControl(user?.phone, [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])
    });
    this.userListFormArray.push(newUserListRow);
  }
}
