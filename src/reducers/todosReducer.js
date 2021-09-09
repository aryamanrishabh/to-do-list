import { CREATE_TODO, EDIT_TODO } from "../actions/types";

const INITIAL_STATE = {
  todos: [],
};

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {...state, todos: [...state.todos, action.payload]};

    case EDIT_TODO:
      const todosCopy = [...state.todos];
      const index = todosCopy.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todosCopy[index] = action.payload;
      return {...state, todos: todosCopy};

    default:
      return state;
  }
};
