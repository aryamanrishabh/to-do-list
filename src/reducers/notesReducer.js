import { CREATE_NOTE, EDIT_NOTE } from "../actions/types";

const INITIAL_STATE = {
  notes: [],
};

export const notesReducer = (notes = INITIAL_STATE.notes, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return [...notes, action.payload];

    case EDIT_NOTE:
      let notesCopy = [...notes];
      const index = notesCopy.findIndex(
        (note) => note.id === action.payload.id
      );
      notesCopy[index] = action.payload;
      return [...notesCopy];

    default:
      return notes;
  }
};

// return notes.map((note) =>
//         note.id === action.payload.id
//           ? Object.assign(note, action.payload)
//           : note
//       );
