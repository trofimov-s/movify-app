import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components';
import { LogoModule } from '@shared/logo';
import { ColorSchemaModule } from '@modules/color-schema';

@NgModule({
  imports: [CommonModule, LogoModule, ColorSchemaModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
