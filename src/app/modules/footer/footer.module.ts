import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
