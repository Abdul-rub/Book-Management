import * as types from './actionTypes'
import axios from "axios"



export const getBooks=(params)=>(dispatch)=>{
  dispatch({type:types.GET_BOOK_REQUEST});
  return axios
  .get("http://localhost:8080/books",params)
  .then((res)=>{dispatch({type:types.GET_BOOK_SUCCESS,payload:res.data})})
  .catch((err)=>{dispatch({type:types.GET_BOOK_FAILURE,payload:err})})
}