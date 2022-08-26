import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "contracts/counter";

const initialState: CounterState = {
  count: 0,
  lastUpdate: undefined,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
      state.lastUpdate = new Date();
    },
    decrement: (state) => {
      state.count--;
      state.lastUpdate = new Date();
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
      state.lastUpdate = new Date();
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;
