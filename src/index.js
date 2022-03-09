import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//create store
const storeName = "TODO-APP";
//save to local storage
const saveToLocalStorage = (state) => {
  try {
    const stringState = JSON.stringify(state);
    localStorage.setItem(storeName, stringState);
  } catch (e) {
    throw new Error(e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const stringState = localStorage.getItem(storeName);
    if (stringState === null) return undefined;
    return JSON.parse(stringState);
  } catch (e) {
    throw new Error(e);
  }
};
const middleware = [thunk];

const persistedStorage = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  persistedStorage,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
