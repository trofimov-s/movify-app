import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components';
import { LogoModule } from '@shared/logo';

@NgModule({
  imports: [CommonModule, LogoModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
