import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this.loading.asObservable().pipe(delay(1));

  constructor() {}

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
