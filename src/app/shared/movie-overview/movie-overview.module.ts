import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MoviewOverviewComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [MoviewOverviewComponent],
  exports: [MoviewOverviewComponent],
})
export class MovieOverviewModule {}
