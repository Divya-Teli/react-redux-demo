import axios from "axios";
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from "../constants/App";

// Get All Post
function request() {
  return {
    type: GET_POSTS_REQUEST,
  };
}

function receiveData(json) {
  return {
    type: GET_POSTS_SUCCESS,
    data: json,
  };
}

export function getPosts() {
  return (dispatch) => {
    dispatch(request());
    return axios
      .get("https://jsonplaceholder.typicode.com/posts", { timeout: 20000 })
      .then((response) => response.data)
      .then((json) => {
        if (json.Success == "false") {
          return dispatch({ type: GET_POSTS_FAIL, data: json });
        } else {
          return dispatch(receiveData(json));
        }
      })
      .catch((err) => {
        return dispatch({type:GET_POSTS_FAIL});
     
      });
  };
}



