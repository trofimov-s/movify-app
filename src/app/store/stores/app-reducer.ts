import { ActionReducerMap } from '@ngrx/store';
import { CounterState, counterReducer } from './test/reducer';

export const enum StateKey {
  COUNTER = 'counter',
}

export interface AppState {
  [StateKey.COUNTER]: CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  [StateKey.COUNTER]: counterReducer,
};
