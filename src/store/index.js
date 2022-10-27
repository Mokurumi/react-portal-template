import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'

import createSagaMiddleware from "redux-saga"

import rootReducer from "./reducers"
import rootSaga from "./sagas"


const appSlice = createSlice({
  name: "ReactApp",
  initialState: {
    todos: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload
      };
    }
  }
});

export const { fetchData } = appSlice.actions;

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

export default store;
