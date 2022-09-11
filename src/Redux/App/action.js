import * as types from './actionTypes'
import axios from "axios"



export const getBooks=(params)=>(dispatch)=>{
  dispatch({type:types.GET_BOOK_REQUEST});
  return axios
  .get("http://localhost:8080/books",params)
  .then((res)=>{dispatch({type:types.GET_BOOK_SUCCESS,payload:res.data})})
  .catch((err)=>{dispatch({type:types.GET_BOOK_FAILURE,payload:err})})
}

export const update =(id, payload)=>dispatch=>{
  dispatch({type:types.PATCH_BOOK_REQUEST});
  return axios.patch(`http://localhost:8080/books/${id}`,payload)
  .then((res)=>{dispatch({type:types.PATCH_BOOK_SUCCESS})})
  .catch((err)=>{dispatch({type:types.PATCH_BOOK_FAILURE,payload:err})})
}