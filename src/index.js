import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import App from "./App";
import { counterReducer } from "./reducer";

const myLogger = (store) => (next) => (action) => {
  console.log("our middleware runs");
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  console.log("our secondMiddleware runs");
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
  //   console.log(store);
};

// const myLogger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("middleware runs");
//       return next(action);
//     };
//   };
// };

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
