import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-style-guide-input',
  templateUrl: './style-guide-input.component.html',
  styleUrls: ['./style-guide-input.component.scss']
})
export class StyleGuideInputComponent implements OnInit {
  emailFormControl: UntypedFormControl;
  textValue = 'Click button to clear';
  isPasswordHidden = true;
  passwordValue = 'p@s5w0rd';

  constructor() { }

  ngOnInit(): void {
    this.emailFormControl = new UntypedFormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

}
