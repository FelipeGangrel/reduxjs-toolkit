import { createSlice } from "@reduxjs/toolkit";
import { CreateCatState, FetchCatsState } from "contracts/cats";
import { createCat, fetchCats } from "./thunks";

export const fetchCatsSlice = createSlice<FetchCatsState, {}, "cats">({
  name: "cats",
  initialState: {
    cats: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.loading = false;
      state.cats = action.payload;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.error;
    });
  },
});

export const createCatSlice = createSlice<CreateCatState, {}, "cats">({
  name: "cats",
  initialState: {
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCat.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.validationErrors = undefined;
    });
    builder.addCase(createCat.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createCat.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.error;
      state.validationErrors = action.payload?.validationErrors;
    });
  },
});
