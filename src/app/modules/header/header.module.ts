import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent, LanguageComponent } from './components';
import { LogoModule } from '@shared/logo';
import { ColorSchemaModule } from '@modules/color-schema';
import { DropdownModule } from '@shared/dropdown';
import { IconModule } from '@shared/icon';

@NgModule({
  imports: [CommonModule, LogoModule, ColorSchemaModule, DropdownModule, IconModule],
  declarations: [HeaderComponent, LanguageComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
