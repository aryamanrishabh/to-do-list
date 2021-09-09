import { CREATE_NOTE, EDIT_NOTE } from "../actions/types";

const INITIAL_STATE = {
  notes: [],
};

// export const notesReducer = (notes = INITIAL_STATE.notes, action) => {
//   switch (action.type) {
//     case CREATE_NOTE:
//       return [...notes, action.payload];

//     case EDIT_NOTE:
//       let notesCopy = [...notes];
//       const index = notesCopy.findIndex(
//         (note) => note.id === action.payload.id
//       );
//       notesCopy[index] = action.payload;
//       return [...notesCopy];

//     default:
//       return notes;
//   }
// };

export const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    case EDIT_NOTE:
      let notesCopy = [...state.notes];
      const index = notesCopy.findIndex(
        (note) => note.id === action.payload.id
      );
      notesCopy[index] = action.payload;
      return { ...state, notes: notesCopy };

    default:
      return state;
  }
};
