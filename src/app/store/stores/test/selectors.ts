import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './reducer';
import { StateKey } from '../app-reducer';

const selectFeature = createFeatureSelector<CounterState>(StateKey.COUNTER);

export const selectCount = createSelector(
  selectFeature,
  (state: CounterState): number => state.counter,
);
