import { fork } from "redux-saga/effects";
import catsSaga from "./cats/catsSaga";

const rootSaga = function* () {
  yield fork(catsSaga);
};

export default rootSaga;
