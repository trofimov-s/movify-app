import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoImgComponent, LogoTxtComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [LogoImgComponent, LogoTxtComponent],
  exports: [LogoImgComponent, LogoTxtComponent],
})
export class LogoModule {}
