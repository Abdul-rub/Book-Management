import * as types from "./actionTypes"
import axios from "axios"


export const login =(payload)=>(dispatch)=>{
    dispatch({type:types.USER_LOGIN_REQUEST})
    return axios.post(`https://reqres.in/api/login`,payload)
    .then((res)=>{return dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data.token})})
    .catch((err)=>{dispatch({type:types.USER_LOGIN_FAILURE,payload:err})})

}
