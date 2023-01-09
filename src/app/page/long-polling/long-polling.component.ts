import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {merge, Subject, takeUntil, timer} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-long-polling',
  templateUrl: './long-polling.component.html',
  styleUrls: ['./long-polling.component.scss']
})
export class LongPollingComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  TIMEOUT_IN_SEC = 5;
  userClickSubj = new Subject();
  postData = {};

  constructor(protected httpClient: HttpClient) {}

  ngOnInit(): void {
    // https://blog.strongbrew.io/rxjs-polling/
    merge(timer(0, this.TIMEOUT_IN_SEC * 1000), this.userClickSubj)
      .pipe(mergeMap((_) => this.getData()))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (response: HttpResponse<any>) => {
          console.log('Response:', response);
          this.postData = response;
        },
        error: (error: HttpErrorResponse) => {
          console.log('Error:', error);
        },
        complete: () => {
          console.log('Complete');
        }
      });
  }

  getData() {
    const randomId = Math.floor(Math.random() * 100);
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
  }

  getNow() {
    this.userClickSubj.next('');
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
