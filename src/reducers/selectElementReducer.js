import { SELECT_ELEMENT } from "../actions/types";

export const selectElementReducer = (element = null, action) => {
  switch (action.type) {
    case SELECT_ELEMENT:
      return action.payload;

    default:
      return element;
  }
};
