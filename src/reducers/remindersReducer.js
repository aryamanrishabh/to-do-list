import { CREATE_REMINDER, EDIT_REMINDER } from "../actions/types";

const INITIAL_STATE = {
  reminders: [],
};

export const remindersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return { ...state, reminders: [...state.reminders, action.payload] };

    case EDIT_REMINDER:
      const remindersCopy = [...state.reminders];
      const index = remindersCopy.findIndex(
        (todo) => todo.id === action.payload.id
      );
      remindersCopy[index] = action.payload;
      return { ...state, reminders: remindersCopy };

    default:
      return state;
  }
};
