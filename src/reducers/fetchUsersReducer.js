import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
  FETCH_USERS_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users, // api request, [...state.users, action.payload.response] ?
        loading: false,
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
