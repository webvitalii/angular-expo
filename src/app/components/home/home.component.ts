import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appState = 'off';

  constructor() { }

  ngOnInit(): void {
  }


  handleModelChange() {
    console.log('appState = ', this.appState);
  }

}
