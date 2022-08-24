import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistedReducer = persistReducer(
  {
    key: "tentativa-de-delicia",
    whitelist: [],
    storage,
  },
  rootReducer
);

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
  devTools: process.env.NODE_ENV !== "production",
});

saga.run(rootSaga);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
