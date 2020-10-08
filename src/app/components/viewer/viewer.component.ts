import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  columns = ['users', 'title', 'text', 'date'];
  termUsers = '';
  termTitle = '';
  termText = '';
  termDateFrom = '';
  termDateTo = '';

  activePage = 1;
  itemsPerPage = 5;
  items = [];

  constructor(public data: DataService) { }

  ngOnInit(): void {
    console.log(this.data.jsonData);
    this.items = this.data.jsonData;
  }

  displayActivePage(activePageNumber: number): void {
    this.activePage = activePageNumber;
  }

}
