import { CREATE_REMINDER, EDIT_REMINDER } from "../actions/types";

const INITIAL_STATE = {
  reminders: []
};

export const remindersReducer = (reminders = INITIAL_STATE.reminders, action) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return [...reminders, action.payload];

    case EDIT_REMINDER:
      return reminders.map((reminder) =>
        reminder.id === action.payload.id
          ? Object.assign(reminder, action.payload)
          : reminder
      );

    default:
      return reminders;
  }
};
