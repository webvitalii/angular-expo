import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { ANIMATION_ROUTE } from './animation.route';

@NgModule({
  declarations: [SliderComponent],
  imports: [RouterModule.forChild(ANIMATION_ROUTE), SharedModule]
})
export class AnimationModule {}
