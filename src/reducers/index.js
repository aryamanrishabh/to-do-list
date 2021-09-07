import { combineReducers } from "redux";
import { modeReducer } from "./modeReducer";
import { selectElementReducer } from "./selectElementReducer";
import { notesReducer } from "./notesReducer";
import { todosReducer } from "./todosReducer";
import { remindersReducer } from "./remindersReducer";

export default combineReducers({
  mode: modeReducer,
  selectedElement: selectElementReducer,
  notes: notesReducer,
  todos: todosReducer,
  reminders: remindersReducer,
});
