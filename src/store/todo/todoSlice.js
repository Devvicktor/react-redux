import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...action.data];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.todo);
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
