import { SELECT_ELEMENT } from "./types";

export const selectElement = (element) => {
  return {
    type: SELECT_ELEMENT,
    payload: element,
  };
};
