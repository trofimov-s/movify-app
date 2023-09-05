import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorSchemaComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorSchemaComponent],
  exports: [ColorSchemaComponent],
})
export class ColorSchemaModule {}
