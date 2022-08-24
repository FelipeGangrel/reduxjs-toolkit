import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatBreed } from "contracts/cats";

interface CatsState {
  loading: boolean;
  cats: CatBreed[];
  error: string | null;
}

export interface FetchAction extends PayloadAction<{ limit?: number }> {}
interface SuccessAction extends PayloadAction<{ cats: CatBreed[] }> {}
interface FailureAction extends PayloadAction<{ error: string }> {}

const initialState: CatsState = {
  loading: false,
  cats: [],
  error: null,
};

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    onFetchRequest: (state, _action: FetchAction) => {
      state.loading = true;
      state.error = null;
    },
    onFetchSuccess: (state, action: SuccessAction) => {
      state.loading = false;
      state.cats = action.payload.cats;
    },
    onFetchFailure: (state, action: FailureAction) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { onFetchRequest, onFetchSuccess, onFetchFailure } =
  catsSlice.actions;

export default catsSlice.reducer;
