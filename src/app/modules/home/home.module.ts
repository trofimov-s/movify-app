import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { MovieOverviewModule } from '@shared/movie-overview';
import { CardModule } from '@shred/card';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, MovieOverviewModule, CardModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
