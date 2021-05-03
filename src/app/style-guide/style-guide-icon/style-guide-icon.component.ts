import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-style-guide-icon',
  templateUrl: './style-guide-icon.component.html',
  styleUrls: ['./style-guide-icon.component.scss']
})
export class StyleGuideIconComponent implements OnInit {
  iconList = ['grade', 'favorite', 'home',
    'menu', 'open_in_new', 'more_vert',
    'delete', 'bookmark', 'add',
    'person', 'search', 'settings'];

  constructor() { }

  ngOnInit(): void {
  }

}
