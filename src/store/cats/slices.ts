import { createSlice } from "@reduxjs/toolkit";
import { CatBreed } from "contracts/cats";
import { fetchCats, createCat } from "./thunks";

interface FetchCatsState {
  loading: boolean;
  cats: CatBreed[];
  error?: string;
}

interface CreateCatState {
  loading: boolean;
  error?: string;
  validationErrors?: string[];
}

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
    });
    builder.addCase(fetchCats.fulfilled, (state, action) => {
      state.loading = false;
      state.cats = action.payload;
    });
    builder.addCase(fetchCats.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
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
