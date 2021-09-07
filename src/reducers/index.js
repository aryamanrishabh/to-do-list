import { combineReducers } from "redux";
import { selectElementReducer } from "./selectElementReducer";
import { notesReducer } from "./notesReducer";
import { todosReducer } from "./todosReducer";
import { remindersReducer } from "./remindersReducer";

export default combineReducers({
  selectedElement: selectElementReducer,
  notes: notesReducer,
  todos: todosReducer,
  reminders: remindersReducer,
});
