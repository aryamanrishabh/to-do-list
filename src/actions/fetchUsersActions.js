import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
} from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const response = await jsonPlaceholder.get("/users");

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: {
        users: response,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_USERS_ERROR,
      payload: {
        error: err,
      },
    });
  }
};
