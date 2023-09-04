import { createReducer, on } from '@ngrx/store';

import { CounterActions } from './actions';

export interface CounterState {
  counter: number;
}

const counterState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  counterState,
  on(
    CounterActions.increase,
    (state: CounterState): CounterState => ({
      ...state,
      counter: state.counter + 1,
    }),
  ),
  on(CounterActions.increaseBy, (state: CounterState, { count }): CounterState => {
    return {
      ...state,
      counter: state.counter + count,
    };
  }),
  on(
    CounterActions.decrease,
    (state: CounterState): CounterState => ({
      ...state,
      counter: state.counter - 1,
    }),
  ),
);
