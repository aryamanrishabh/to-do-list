import { CREATE_REMINDER, EDIT_REMINDER } from "../actions/types";

const INITIAL_STATE = {
  reminders: [],
};

export const remindersReducer = (
  reminders = INITIAL_STATE.reminders,
  action
) => {
  switch (action.type) {
    case CREATE_REMINDER:
      return [...reminders, action.payload];

    case EDIT_REMINDER:
      const remindersCopy = reminders;
      const index = remindersCopy.findIndex(
        (todo) => todo.id === action.payload.id
      );
      remindersCopy[index] = action.payload;
      return remindersCopy;

    default:
      return reminders;
  }
};

// return reminders.map((reminder) =>
//         reminder.id === action.payload.id
//           ? Object.assign(reminder, action.payload)
//           : reminder
//       );
