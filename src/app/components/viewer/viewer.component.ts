import { Component, OnInit } from '@angular/core';
import { DataService } from '@core/services/data.service';

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

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.items = this.dataService.data;
    console.log(this.dataService.data);
  }

  displayActivePage(activePageNumber: number): void {
    this.activePage = activePageNumber;
  }

}
