export { actions as exampleActions } from './slice';
export { default as exampleReducer } from './slice';
import { combineEpics } from 'redux-observable';
import { exampleEpic, exampleAsyncEpic } from './epics';

export const exampleEpics = combineEpics(exampleEpic, exampleAsyncEpic);
