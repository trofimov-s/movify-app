import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CounterActionsEnum } from './actions';

export const CounterEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(ofType(CounterActionsEnum.INCREASE_BY));
  },
  { functional: true, dispatch: false },
);
