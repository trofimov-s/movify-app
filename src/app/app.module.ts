import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components';

import { CoreModule } from '@core';
import { HeaderModule } from '@modules/header';
import { FooterModule } from '@modules/footer';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
