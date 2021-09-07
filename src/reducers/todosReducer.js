import { CREATE_TODO, EDIT_TODO } from "../actions/types";

export const todosReducer = (todos = [], action) => {
  if (action.type === CREATE_TODO) {
    return [...todos, action.payload];
  } else if (action.type === EDIT_TODO) {
    return todos.map((todo) =>
      todo.id === action.payload.id ? Object.assign(todo, action.payload) : todo
    );
  }
  return todos;
};
