import { Routes } from '@angular/router';

import { ANIMATION_SLIDER_ROUTE } from './slider/slider.route';

export const ANIMATION_ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'slider',
        pathMatch: 'full'
      },
      ...ANIMATION_SLIDER_ROUTE
    ]
  }
];
