import { createStore } from "redux";

import rootReducer from "./reducer";
const DEFAULT_STATE = {
  trips: [],
};

export const store = createStore(
  rootReducer,
  DEFAULT_STATE
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
