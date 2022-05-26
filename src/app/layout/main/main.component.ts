import { Component, OnInit, HostBinding } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @HostBinding('attr.app-version') appVersionAttr = environment.appVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
