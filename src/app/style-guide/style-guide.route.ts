import { Routes } from '@angular/router';

import { STYLE_GUIDE_TYPOGRAPHY_ROUTE } from './style-guide-typography/style-guide-typography.route';
import { STYLE_GUIDE_BUTTON_ROUTE } from './style-guide-button/style-guide-button.route';
import { STYLE_GUIDE_ICON_ROUTE } from './style-guide-icon/style-guide-icon.route';


export const STYLE_GUIDE_ROUTE: Routes = [
  {
    path: '',
    redirectTo: 'typography',
    pathMatch: 'full'
  },
  ...STYLE_GUIDE_TYPOGRAPHY_ROUTE,
  ...STYLE_GUIDE_BUTTON_ROUTE,
  ...STYLE_GUIDE_ICON_ROUTE
];
