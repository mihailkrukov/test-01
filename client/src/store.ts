import { createStore } from "redux";
// import devToolsEnhancer from 'remote-redux-devtools';

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
