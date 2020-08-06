import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  @Output() userDataEvt = new EventEmitter<object>();

  userForm: FormGroup;

  genderList = {
    'male': 'Male',
    'female': 'Female'
  };

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'username': new FormControl(null, 
        [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
      'email': new FormControl(null,
        [Validators.required, Validators.email]),
      'gender': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.userDataEvt.emit(this.userForm.value);
    this.userForm.reset();
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
