import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './components';
import { LogoModule } from '@shared/logo';

@NgModule({
  imports: [CommonModule, LogoModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
