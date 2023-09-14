import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircleProgressBarComponent } from './component';

@NgModule({
  imports: [CommonModule],
  declarations: [CircleProgressBarComponent],
  exports: [CircleProgressBarComponent],
})
export class ProgressBarModule {}
