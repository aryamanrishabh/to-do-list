import { CREATE_NOTE, EDIT_NOTE } from "../actions/types";

export const notesReducer = (notes = [], action) => {
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
