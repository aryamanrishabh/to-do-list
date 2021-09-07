import { CREATE_TODO, EDIT_TODO } from "./types";

let nextTodoId = 0;
export const createTodo = (task, status) => {
  return {
    type: CREATE_TODO,
    payload: {
      id: ++nextTodoId,
      task,
      status,
      type: "todo",
      createdAt: Date.parse(new Date()),
      modifiedAt: null,
    },
  };
};

export const editTodo = (id, task, status) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      task,
      status,
      modifiedAt: Date.parse(new Date()),
    },
  };
};
