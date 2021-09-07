import { CREATE_REMINDER, EDIT_REMINDER } from "../actions/types";

export const remindersReducer = (reminders = [], action) => {
  if (action.type === CREATE_REMINDER) {
    return [...reminders, action.payload];
  } else if (action.type === EDIT_REMINDER) {
    return reminders.map((reminder) =>
      reminder.id === action.payload.id
        ? Object.assign(reminder, action.payload)
        : reminder
    );
  }
  return reminders;
};
