import { SELECT_ELEMENT } from "../actions/types";

export const selectElementReducer = (element = null, action) => {
  if (action.type === SELECT_ELEMENT) {
    return action.payload;
  }
  return element;
};
