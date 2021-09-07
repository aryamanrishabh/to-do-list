import { CREATE_NOTE, EDIT_NOTE } from "../actions/types";

export const notesReducer = (notes = [], action) => {
  if (action.type === CREATE_NOTE) {
    return [...notes, action.payload];
  } else if (action.type === EDIT_NOTE) {
    return notes.map((note) =>
      note.id === action.payload.id ? Object.assign(note, action.payload) : note
    );
  }
  return notes;
};
