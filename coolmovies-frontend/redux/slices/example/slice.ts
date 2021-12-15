import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  value: number;
}

const initialState: ExampleState = {
  value: 0,
};

export const slice = createSlice({
  initialState,
  name: 'example',
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
