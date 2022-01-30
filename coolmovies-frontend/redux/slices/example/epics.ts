import { gql } from '@apollo/client';
import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { RootState } from '../../store';
import { EpicDependencies } from '../../types';
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

export const exampleAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetch']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: exampleQuery,
        });
        return actions.loaded({ data: result.data });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

const exampleQuery = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        movieDirectorId
        userCreatorId
        title
        releaseDate
        nodeId
        userByUserCreatorId {
          id
          name
          nodeId
        }
      }
    }
  }
`;
