import { CHANGE_MODE } from "../actions/types";

export const modeReducer = (mode = "", action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload;

    default:
      return mode;
  }
};
