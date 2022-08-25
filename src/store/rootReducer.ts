import { combineReducers } from "@reduxjs/toolkit";

import { fetchCatsSlice, createCatSlice } from "./cats/slices";
import { counterSlice } from "./counter/slices";

export default combineReducers({
  fetchCats: fetchCatsSlice.reducer,
  createCat: createCatSlice.reducer,
  counter: counterSlice.reducer,
});
