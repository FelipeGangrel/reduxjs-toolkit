import { combineReducers } from "@reduxjs/toolkit";

import { fetchCatsSlice, createCatSlice } from "./cats/slices";

export default combineReducers({
  fetchCats: fetchCatsSlice.reducer,
  createCat: createCatSlice.reducer,
});
