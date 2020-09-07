import { Component, OnInit } from '@angular/core';

import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  demoString = 'Demo string TEXT';
  demoNumber = 3.141595;
  demoDate: Date = new Date(1985, 3, 15); // April 15, 1985 - month parameter is zero-based
  demoJson = {key: 'value', nested: {abc: 3, numbers: [1, 2, 3, 4, 5]}};
  demoObservable$: Observable<any> = timer(0, 1000); // alternative for interval(1000)

  constructor() { }

  ngOnInit(): void {
  }

}
