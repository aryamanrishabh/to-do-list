import { CREATE_NOTE, EDIT_NOTE } from "../actions/types";

const INITIAL_STATE = {
  notes: [],
};

export const notesReducer = (notes = INITIAL_STATE.notes, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [...notes, action.payload];

    case EDIT_NOTE:
      return notes.map((note) =>
        note.id === action.payload.id
          ? Object.assign(note, action.payload)
          : note
      );

    default:
      return notes;
  }
};
