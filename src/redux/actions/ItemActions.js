import axios from "axios";
import {
  GET_ITEM_REQUEST,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  ADD_ITEMS_FAIL,
  ADD_ITEMS_REQUEST,
  ADD_ITEMS_SUCCESS,
  DELETE_ITEM_SUCCESS,GET_ITEM_BY_ID_SUCCESS,GET_ITEM_BY_ID_REQUEST,UPDATE_ITEM, GET_POSTS_FAIL
} from "../constants/App";

export function addItem(item) {
  return (dispatch) => {
  
    dispatch({ type: ADD_ITEMS_SUCCESS, data: item });
  
  };
}

export function getItems() {
  return (dispatch) => {
    //dispatch({type:GET_ITEM_REQUEST});
    dispatch({ type: GET_ITEM_SUCCESS }); 
   // dispatch({type:GET_POSTS_FAIL})
   
  };
}

export function deleteItem(id){
  return (dispatch)=>{
    dispatch({type:DELETE_ITEM_SUCCESS,data:id})
  }
}

export function getItemById(id){
  return (dispatch)=>{
    dispatch({type:GET_ITEM_BY_ID_REQUEST})
    dispatch({type:GET_ITEM_BY_ID_SUCCESS,payload:id})
  }
}

export function updateItem(updateData){
  return (dispatch)=>{
    dispatch({type:UPDATE_ITEM,payload:updateData})
  }
}