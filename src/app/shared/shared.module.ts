import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

const sharedComponents = [LoadingComponent, OrderByPipe, ReversePipe];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [...sharedComponents, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
