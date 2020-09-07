import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  private formDefaults = {
    username: 'default-username',
    email: '',
    gender: 'male'
  };
  modelData = { ...this.formDefaults };

  @Output() userDataEvt = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formObj: any) {
    // this.userDataEvt.emit(this.modelData);
    console.log(this.modelData);
    formObj.reset(this.formDefaults);
  }

}
