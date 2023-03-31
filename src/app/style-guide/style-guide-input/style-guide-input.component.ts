import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-style-guide-input',
  templateUrl: './style-guide-input.component.html',
  styleUrls: ['./style-guide-input.component.scss']
})
export class StyleGuideInputComponent implements OnInit {
  emailFormControl: FormControl;
  textValue = 'Click button to clear';
  isPasswordHidden = true;
  passwordValue = 'p@s5w0rd';

  constructor() {}

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
