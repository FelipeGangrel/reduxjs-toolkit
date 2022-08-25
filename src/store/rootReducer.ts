import { combineReducers } from "@reduxjs/toolkit";

import fetchCatsReducer from "./cats/fetchCatsReducer";

export default combineReducers({
  fetchCats: fetchCatsReducer,
});
