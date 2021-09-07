import { CHANGE_MODE } from "../actions/types";

const INITIAL_STATE = {
  mode: "",
};

export const modeReducer = (mode = INITIAL_STATE.mode, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload;

    default:
      return mode;
  }
};
