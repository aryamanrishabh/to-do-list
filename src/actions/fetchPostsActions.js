import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
} from "./types";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: {
        posts: response,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_POSTS_ERROR,
      payload: {
        error: err,
      },
    });
  }
};

// export const fetchPosts = () => async (dispatch) => {
//   try {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({
//       type: FETCH_POSTS,
//       payload: {
//         response,
//         loading: false,
//         error: null,
//       },
//     });
//   } catch (err) {
//     dispatch({
//       type: FETCH_ERROR,
//       payload: {
//         loading: false,
//         error: err,
//       },
//     });
//   }
// };
