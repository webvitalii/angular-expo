import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { StyleGuideTypographyComponent } from './style-guide-typography/style-guide-typography.component';
import { StyleGuideButtonComponent } from './style-guide-button/style-guide-button.component';
import { StyleGuideInputComponent } from './style-guide-input/style-guide-input.component';
import { StyleGuideIconComponent } from './style-guide-icon/style-guide-icon.component';
import { StyleGuideNavComponent } from './style-guide-nav/style-guide-nav.component';
import { STYLE_GUIDE_ROUTE } from './style-guide.route';


@NgModule({
  declarations: [
    StyleGuideTypographyComponent,
    StyleGuideButtonComponent,
    StyleGuideInputComponent,
    StyleGuideIconComponent,
    StyleGuideNavComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(STYLE_GUIDE_ROUTE)
  ]
})
export class StyleGuideModule { }
