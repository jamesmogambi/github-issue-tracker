import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import filtersReducer from "../reducers/filters";
import issueReducer from "../reducers/issues";
import reposReducer from "../reducers/repos";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer,
      repos: reposReducer,
      issues: issueReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
