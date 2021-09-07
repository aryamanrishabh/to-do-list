import { CREATE_REMINDER, EDIT_REMINDER } from "./types";

let nextReminderId = 0;
export const createReminder = (text, due) => {
  return {
    type: CREATE_REMINDER,
    payload: {
      id: ++nextReminderId,
      text,
      due,
      type: "reminder",
      createdAt: Date.parse(new Date()),
      modifiedAt: null,
    },
  };
};

export const editReminder = (id, text, due) => {
  return {
    type: EDIT_REMINDER,
    payload: {
      id,
      text,
      due,
      modifiedAt: Date.parse(new Date()),
    },
  };
};
