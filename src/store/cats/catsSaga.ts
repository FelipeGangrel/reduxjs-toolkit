import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FetchAction,
  onFetchFailure,
  onFetchRequest,
  onFetchSuccess,
} from "./fetchCatsReducer";

function* fetchCats(action: FetchAction) {
  try {
    const url = "https://api.thecatapi.com/v1/breeds";
    const { limit } = action.payload;
    const { data } = yield call(axios.get, url);
    const catsSubset = limit ? data.slice(0, limit) : data;

    yield put(onFetchSuccess({ cats: catsSubset }));
  } catch (error) {
    yield put(onFetchFailure({ error: "Fuuuuuuu" }));
  }
}

export default function* catsSaga() {
  yield takeLatest(onFetchRequest.type, fetchCats);
}
