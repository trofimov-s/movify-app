import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovieCardComponent } from './components';
import { ProgressBarModule } from '@shared/progress-bar';

@NgModule({
  imports: [CommonModule, ProgressBarModule],
  declarations: [MovieCardComponent],
  exports: [MovieCardComponent],
})
export class CardModule {}
