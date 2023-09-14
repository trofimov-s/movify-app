import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownComponent, DropdownItemComponent } from './components';
import { TranslateModule } from '@ngx-translate/core';
import { IconModule } from '@shared/icon';

@NgModule({
  imports: [CommonModule, OverlayModule, TranslateModule, IconModule],
  declarations: [DropdownComponent, DropdownItemComponent],
  exports: [DropdownComponent],
})
export class DropdownModule {}
