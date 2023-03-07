import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const logger = createLogger({
  collapsed: true,
});

const sagaMiddlewares = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddlewares, logger],
});

sagaMiddlewares.run(rootSaga);

export default store;
