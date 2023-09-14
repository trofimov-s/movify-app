import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ColorSchemaService, TranslateHandlerService } from './services';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TokenInterceptor } from './interceptors';

function initializeAppColorSchemaFactory(service: ColorSchemaService): () => void {
  return () => service.initColorSchema();
}

function initializeAppLangFactory(service: TranslateHandlerService): () => void {
  return () => service.init();
}

function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    } as TranslateModuleConfig),
  ],
  exports: [TranslateModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppColorSchemaFactory,
      deps: [ColorSchemaService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppLangFactory,
      deps: [TranslateHandlerService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
