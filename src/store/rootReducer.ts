import { combineReducers } from "@reduxjs/toolkit";

import catsReducer from "./cats/catsSlice";

export default combineReducers({
  cats: catsReducer,
});
