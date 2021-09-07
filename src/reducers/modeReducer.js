import { CHANGE_MODE } from "../actions/types";

export const modeReducer = (mode = "", action) => {
  if (action.type === CHANGE_MODE) {
    return action.payload;
  }
  return mode;
};
