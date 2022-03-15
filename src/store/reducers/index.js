import { lightTheme } from "../../util/theme";

const initialState = {
  todos: [],
  theme: lightTheme,
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_TODO":
      let items =
        state.todos.length < 0 ? [action.data] : [...state.todos, action.data];
      return {
        ...state,
        todos: items,
      };
    case "REMOV_ITEM_FROM_TODO_LIST":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.data),
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}
