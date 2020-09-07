import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Error.';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.route.snapshot.data.message;
    // In case the data is dynamic
    /*this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );*/
  }

}
