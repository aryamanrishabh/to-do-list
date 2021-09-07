import { CREATE_NOTE, EDIT_NOTE, RESET_NOTE } from "./types";

let nextNoteId = 0;
export const createNote = (text) => {
  return {
    type: CREATE_NOTE,
    payload: {
      id: ++nextNoteId,
      text,
      type: "note",
      createdAt: Date.parse(new Date()),
      modifiedAt: null,
    },
  };
};

export const editNote = (id, text) => {
  return {
    type: EDIT_NOTE,
    payload: {
      id,
      text,
      modifiedAt: Date.parse(new Date()),
    },
  };
};

