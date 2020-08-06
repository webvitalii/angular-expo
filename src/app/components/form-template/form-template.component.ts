import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  modelData = {
    'username': '',
    'email': '',
    'gender': ''
  };

  @Output() userDataEvt = new EventEmitter<object>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formObj: any) {
    this.userDataEvt.emit(this.modelData);
    formObj.reset();
  }

}
