import { Component, OnInit } from '@angular/core';

import { animationList } from '@core/animations/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [...animationList]
})
export class SliderComponent implements OnInit {
  sliderList = ['First one 1', 'Second item 2', 'Third one 3', 'Fourth item 4'];
  sliderIndex = 1;
  isVisible = true;

  constructor() {}

  ngOnInit(): void {}

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
