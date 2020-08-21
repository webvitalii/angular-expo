import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  private customObservableSub: Subscription;
  customObservable$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.customObservable$ = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 8) {
          observer.complete();
        }
        if(count > 9) {
          observer.error(new Error('Count is greater than 9'));
        }
        count++;
      }, 1000);
    });

    this.customObservableSub = this.customObservable$.subscribe(data => {
      console.log('customObservable$ value = ', data);
    }, error => {
      console.log('customObservable$ error = ', error);
    }, () => {
      console.log('customObservable$ completed');
    });
  }

  ngOnDestroy(): void {
    this.customObservableSub.unsubscribe();
  }

}
