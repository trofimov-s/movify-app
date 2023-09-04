import { createAction, props } from '@ngrx/store';

export const enum CounterActionsEnum {
  INCREASE = '[Counter] Increase',
  INCREASE_BY = '[Counter] Increase by',
  DECREASE = '[Counter] Decrease',
}

export const CounterActions = {
  increase: createAction(CounterActionsEnum.INCREASE),
  increaseBy: createAction(CounterActionsEnum.INCREASE_BY, props<{ count: number }>()),
  decrease: createAction(CounterActionsEnum.DECREASE),
};
