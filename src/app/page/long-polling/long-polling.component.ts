import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { merge, Subject, Subscription, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-long-polling',
  templateUrl: './long-polling.component.html',
  styleUrls: ['./long-polling.component.scss']
})
export class LongPollingComponent implements OnInit, OnDestroy {
  dashboardSub: Subscription;
  TIMEOUT_IN_SEC = 5;
  userClickSubj = new Subject();
  postData = {};

  constructor(protected httpClient: HttpClient) {}

  ngOnInit(): void {
    // https://blog.strongbrew.io/rxjs-polling/
    this.dashboardSub = merge(timer(0, this.TIMEOUT_IN_SEC * 1000), this.userClickSubj)
      .pipe(mergeMap((_) => this.getData()))
      .subscribe(
        (res: HttpResponse<any>) => {
          console.log('Result: ', res);
          this.postData = res;
        },
        (err: HttpErrorResponse) => {
          console.log('Error:', err);
        }
      );
  }

  getData() {
    const randomId = Math.floor(Math.random() * 100);
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
  }

  getNow() {
    this.userClickSubj.next('');
  }

  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks
    if (this.dashboardSub) {
      this.dashboardSub.unsubscribe();
    }
  }
}
