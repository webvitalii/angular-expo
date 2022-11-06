import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  public subject = new Subject<number>();
  public subjectSubscriberIndex = 1;
  public subjectSubscribersValues: number[][] = [];
  public subjectCounter = 1;

  public behaviorSubject = new BehaviorSubject<number>(0); // 0 is the initial value
  public behaviorSubjectSubscriberIndex = 1;
  public behaviorSubjectSubscribersValues: number[][] = [];
  public behaviorSubjectCounter = 1;

  public replaySubject = new ReplaySubject<number>(3); // stores last 3 values
  // public replaySubject3S = new ReplaySubject<number>(Number.POSITIVE_INFINITY, 3000); // all values during last 3 seconds
  public replaySubjectSubscriberIndex = 1;
  public replaySubjectSubscribersValues: number[][] = [];
  public replaySubjectCounter = 1;

  public asyncSubject = new AsyncSubject<number>();
  public asyncSubjectSubscriberIndex = 1;
  public asyncSubjectSubscribersValues: number[][] = [];
  public asyncSubjectCounter = 1;

  constructor() {}

  ngOnInit(): void {}

  subjectSubscribe() {
    this.subjectSubscriberIndex++;
    const subscriberValues = [];
    this.subjectSubscribersValues.push(subscriberValues);
    this.subject.subscribe((value) => subscriberValues.push(value));
  }

  subjectEmitValue() {
    this.subject.next(this.subjectCounter++);
  }

  subjectComplete() {
    this.subject.complete();
  }

  behaviorSubjectSubscribe() {
    this.behaviorSubjectSubscriberIndex++;
    const subscriberValues = [];
    this.behaviorSubjectSubscribersValues.push(subscriberValues);
    this.behaviorSubject.subscribe((value) => subscriberValues.push(value));
  }

  behaviorSubjectEmitValue() {
    this.behaviorSubject.next(this.behaviorSubjectCounter++);
  }

  behaviorSubjectComplete() {
    this.behaviorSubject.complete();
  }

  replaySubjectSubscribe() {
    this.replaySubjectSubscriberIndex++;
    const subscriberValues = [];
    this.replaySubjectSubscribersValues.push(subscriberValues);
    this.replaySubject.subscribe((value) => subscriberValues.push(value));
  }

  replaySubjectEmitValue() {
    this.replaySubject.next(this.replaySubjectCounter++);
  }

  replaySubjectComplete() {
    this.replaySubject.complete();
  }

  asyncSubjectSubscribe() {
    this.asyncSubjectSubscriberIndex++;
    const subscriberValues = [];
    this.asyncSubjectSubscribersValues.push(subscriberValues);
    this.asyncSubject.subscribe((value) => subscriberValues.push(value));
  }

  asyncSubjectEmitValue() {
    this.asyncSubject.next(this.asyncSubjectCounter++);
  }

  asyncSubjectComplete() {
    this.asyncSubject.complete();
  }
}
