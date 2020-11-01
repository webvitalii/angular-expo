import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private customObsSub: Subscription;
  private intervalSub: Subscription;

  customObservable$: Observable<any>;
  interval$: Observable<any>;
  intervalOutput: string = '';

  constructor() { }

  ngOnInit(): void {
    this.customObservable$ = new Observable(observer => {
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
      (data) => { // next callback
        console.log('customObservable$ value = ', data);
      },
      (error) => { // error callback
        console.log('customObservable$ error = ', error);
      },
      () => { // complete callback
        console.log('customObservable$ completed');
      }
    );

    this.interval$ = interval(1000);

    this.intervalSub = this.interval$
      .pipe(
        filter((value) => value % 2 === 0),
        map((value) => `${value} seconds passed`)
      )
      .subscribe((value) => {
        this.intervalOutput = value;
        console.log(value);
      });
  }

  intervalUnsubscribe() {
    this.intervalSub.unsubscribe();
  }

  ngOnDestroy(): void {
    if (this.customObsSub) {
      this.customObsSub.unsubscribe();
    }
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
    }
  }

}
