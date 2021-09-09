import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REQUEST,
} from "../actions/types";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPostsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
      };

    case FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
