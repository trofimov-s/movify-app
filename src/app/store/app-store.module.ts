import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS, reducers } from './stores';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot(reducers), EffectsModule.forRoot(EFFECTS)],
})
export class AppStoreModule {}
