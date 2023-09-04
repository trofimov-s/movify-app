import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { ColorSchemaService } from './services';

function initializeAppColorSchemaFactory(service: ColorSchemaService): () => void {
  return () => service.initColorSchema();
}

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppColorSchemaFactory,
      deps: [ColorSchemaService],
      multi: true,
    },
  ],
})
export class CoreModule {}
