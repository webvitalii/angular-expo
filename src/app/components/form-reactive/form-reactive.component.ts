import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  @Output() userDataEvt = new EventEmitter<object>();

  userForm: FormGroup;

  private formDefaults = {
    'username': 'default-username',
    'email': '',
    'gender': 'male'
  };

  genderList = {
    'male': 'Male',
    'female': 'Female'
  };

  forbiddenUsernames = ['admin', 'user', 'test'];

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'username': new FormControl(null, 
        [Validators.required, Validators.maxLength(15), 
          Validators.pattern('^[a-zA-Z0-9\-\_]+$'),
          this.customFormValidator.bind(this)]), // bind() to fix 'this' ref
      'email': new FormControl(null,
        [Validators.required, Validators.email], 
        [this.customAsyncFormValidator]),
      'gender': new FormControl(null, Validators.required)
    });
    this.userForm.setValue(this.formDefaults);
  }

  onSubmit() {
    //this.userDataEvt.emit(this.userForm.value);
    console.log(this.userForm.value);
    this.userForm.reset(this.formDefaults);
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

  customFormValidator(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'usernameForbidden': true}; // form control is invalid
    }
    return null; // form control is valid
  }

  customAsyncFormValidator(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailForbidden': true});
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }

}
