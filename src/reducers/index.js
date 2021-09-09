import { combineReducers } from "redux";
import { selectElementReducer } from "./selectElementReducer";
import { notesReducer } from "./notesReducer";
import { todosReducer } from "./todosReducer";
import { remindersReducer } from "./remindersReducer";
import { fetchPostsReducer } from "./fetchPostsReducer";
import { fetchUsersReducer } from "./fetchUsersReducer";

export default combineReducers({
  selectedElement: selectElementReducer,
  notes: notesReducer,
  todos: todosReducer,
  reminders: remindersReducer,
  posts: fetchPostsReducer,
  users: fetchUsersReducer,
});
