import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private unsubscribe$ = new Subject<void>();

  private formDefaults = {
    username: 'default-username',
    email: '',
    gender: 'male',
    agreeTerms: false
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
      gender: new FormControl(null, Validators.required),
      agreeTerms: new FormControl(null, Validators.requiredTrue)
    });
    this.form.patchValue(this.formDefaults);

    this.trackFormChanges();
  }

  trackFormChanges() {
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      const inputsWithErrors: string[] = [];
  
      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);
        if (control.invalid) {
          inputsWithErrors.push(`${key}: ${JSON.stringify(control.errors)}`);
        }
      });
  
      if (inputsWithErrors.length > 0) {
        console.log('Inputs with errors:', inputsWithErrors);
      }
    });
  }

  collectFormErrors(): object {
    let errors = {};
  
    for (const controlName in this.form.controls) {
      const control = this.form.get(controlName);
      const controlErrors = control.errors;
  
      if (control.invalid && controlErrors) {
        errors[controlName] = controlErrors;
      }
    }
  
    return errors;
  }

  onSubmit() {
    if (this.form.invalid) {
      return false;
    }
    console.log(this.form);
    console.log(this.form.value);
    this.form.reset(this.formDefaults);
  }
  
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
