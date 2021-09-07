import { SELECT_ELEMENT } from "../actions/types";

const INITIAL_STATE = {
  element: null,
};

export const selectElementReducer = (
  element = INITIAL_STATE.element,
  action
) => {
  switch (action.type) {
    case SELECT_ELEMENT:
      return action.payload;

    default:
      return element;
  }
};
