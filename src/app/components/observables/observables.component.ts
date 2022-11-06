import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private customObsSub: Subscription;
  private intervalSub: Subscription;
  private subjectSub: Subscription;

  customObservable$: Observable<any>;
  interval$: Observable<any>;
  intervalOutput: string = '';
  subject$: Subject<any> = new Subject<any>();
  subjectCounter = 0;
  subjectMsg = '';

  constructor() {}

  ngOnInit(): void {
    this.customObservable$ = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 8) {
          observer.complete();
        }
        if (count > 9) {
          observer.error(new Error('Count is greater than 9'));
        }
        count++;
      }, 1000);
    });

    this.customObsSub = this.customObservable$.subscribe(
      (data) => {
        // next callback
        console.log('customObservable$ value = ', data);
      },
      (error) => {
        // error callback
        console.log('customObservable$ error = ', error);
      },
      () => {
        // complete callback
        console.log('customObservable$ completed');
      }
    );

    this.interval$ = interval(1000);

    this.intervalSub = this.interval$
      .pipe(
        filter((data) => data % 2 === 0),
        map((data) => `${data} seconds passed`)
      )
      .subscribe((data) => {
        this.intervalOutput = data;
        console.log(data);
      });

    this.subjectSub = this.subject$.subscribe((data) => {
      this.subjectMsg = data;
    });
  }

  intervalUnsubscribe() {
    this.intervalSub.unsubscribe();
  }

  next() {
    this.subjectCounter++;
    this.subject$.next(this.subjectCounter);
  }

  ngOnDestroy(): void {
    if (this.customObsSub) {
      this.customObsSub.unsubscribe();
    }
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
    if (this.subjectSub) {
      this.subjectSub.unsubscribe();
    }
  }
}
