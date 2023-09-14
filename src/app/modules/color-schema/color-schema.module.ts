import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorSchemaComponent } from './components';
import { IconModule } from '@shared/icon';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [ColorSchemaComponent],
  exports: [ColorSchemaComponent],
})
export class ColorSchemaModule {}
