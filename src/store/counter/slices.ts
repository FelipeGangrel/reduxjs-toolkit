import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "contracts/counter";

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});
