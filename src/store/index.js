// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import todosReducer from "./reducers/index";

// export default configureStore({
//   reducer: {
//     todo: todosReducer,
//   },
// });
const rootReducer = combineReducers({
  todo: todosReducer,
});
export default rootReducer;
