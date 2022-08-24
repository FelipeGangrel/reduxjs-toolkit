import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatBreed } from "contracts/cats";

interface CatsState {
  loading: boolean;
  cats: CatBreed[];
  error: string | null;
}

interface SuccessAction {
  cats: CatBreed[];
}

interface FailureAction {
  error: string;
}

const initialState: CatsState = {
  loading: false,
  cats: [],
  error: null,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    onFetchRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    onFetchSuccess: (state, action: PayloadAction<SuccessAction>) => {
      state.loading = false;
      state.cats = action.payload.cats;
    },
    onFetchFailure: (state, action: PayloadAction<FailureAction>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { onFetchRequest, onFetchSuccess, onFetchFailure } =
  catsSlice.actions;

export default catsSlice.reducer;
