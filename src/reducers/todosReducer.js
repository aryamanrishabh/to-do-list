import { CREATE_TODO, EDIT_TODO } from "../actions/types";

const INITIAL_STATE = {
  todos: []
};

export const todosReducer = (todos = INITIAL_STATE.todos, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [...todos, action.payload];

    case EDIT_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? Object.assign(todo, action.payload)
          : todo
      );

    default:
      return todos;
  }
};
