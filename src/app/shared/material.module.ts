import { NgModule } from '@angular/core';

// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
// import { MatSortModule } from '@angular/material/sort';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatTableModule } from '@angular/material/table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatToolbarModule]
})
export class MaterialModule {}
