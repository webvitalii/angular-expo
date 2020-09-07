import { Component } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-demos';

  userData = {
    username: '',
    email: '',
    gender: ''
  };
  hasData = false;

  getUserData($event: any) {
    this.hasData = true;
    this.userData = { ...$event }; // copy data inside of the object
  }

  originalOrder = ( a: KeyValue<number, string>, b: KeyValue<number, string> ): number => {
    return 0;
  }
}
