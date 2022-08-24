import { combineReducers } from "@reduxjs/toolkit";

import catsReducer from "./cats/catsReducer";

export default combineReducers({
  cats: catsReducer,
});
