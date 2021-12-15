import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  value: number;
  sideEffectCount: number;
}

const initialState: ExampleState = {
  value: 0,
  sideEffectCount: 0,
};

export const slice = createSlice({
  initialState,
  name: 'example',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    epicSideEffect: (state) => {
      state.sideEffectCount += 1;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
