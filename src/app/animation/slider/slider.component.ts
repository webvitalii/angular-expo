import {Component, OnInit} from '@angular/core';
import {transition, trigger} from '@angular/animations';

import {animationEnter, animationLeave, animationNext, animationPrev} from '@core/animations/animations';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('animationDefault', [
      transition(':enter', animationEnter),
      transition(':leave', animationLeave)
    ]),
    trigger('animationSlider', [
      transition(':increment', animationNext),
      transition(':decrement', animationPrev)
    ])
  ]
})
export class SliderComponent implements OnInit {
  sliderList = [
    'First one',
    'Second item',
    'Third and last one',
    'Fourth item'
  ];
  sliderIndex = 1;
  isVisible = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  prevItem() {
    this.sliderIndex--;
    if (this.sliderIndex < 1) {
      this.sliderIndex = 1;
    }
  }

  nextItem() {
    this.sliderIndex++;
    if (this.sliderIndex > this.sliderList.length) {
      this.sliderIndex = this.sliderList.length;
    }
  }

}
