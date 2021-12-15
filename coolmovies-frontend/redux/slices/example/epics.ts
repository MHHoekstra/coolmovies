import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RootState } from '../../store';
import { actions, SliceAction } from './slice';

export const exampleEpic: Epic = (
  action$: Observable<SliceAction['increment']>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.increment.match),
    filter(() => Boolean(state$.value.example.value % 2)),
    map(() => actions.epicSideEffect())
  );
