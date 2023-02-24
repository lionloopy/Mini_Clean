import { createStore } from "@reduxjs/toolkit";
import slice from "../modules/slice";

const store = createStore(
  slice,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
