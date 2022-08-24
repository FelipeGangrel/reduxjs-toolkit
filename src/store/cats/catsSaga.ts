import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { onFetchFailure, onFetchRequest, onFetchSuccess } from "./catsReducer";

function* fetchCats() {
  const url = "https://api.thecatapi.com/v1/breeds";

  try {
    const { data } = yield call(axios.get, url);
    const catsSubset = data.slice(0, 10); // the first 10 cats

    yield put(onFetchSuccess({ cats: catsSubset }));
  } catch (error) {
    yield put(onFetchFailure({ error: "Fuuuuuuu" }));
  }
}

export default function* catsSaga() {
  yield takeLatest("cats/onFetchRequest", fetchCats);
}
