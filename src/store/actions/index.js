export const addItemToTodo = (data) => {
  return (dispatch) => dispatch({ data, type: "ADD_ITEM_TO_TODO" });
};
export const removeItemfromTodo = (data) => {
  return (dispatch) => dispatch({ data, type: "REMOV_ITEM_FROM_TODO_LIST" });
};
// export const ADD_ITEM = "ADD_ITEM_TO_TODO";
// export const REMOVE_ITEM = "REMOV_ITEM_FROM_TODO_LIST";
