import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/Auth/action'
import {useNavigate,useLocation} from "react-router-dom"

export const Login = () => {
   const [email,setEmail] = useState('eve.holt@reqres.in')
   const [password,setPassword]=useState('')
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const location = useLocation()
  //  console.log("Inside loginPage",location)
   const comingFrom = location.state.data || "/";

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(email && password){
        dispatch(login({email,password})).then((res)=>{
          // console.log('After Successful login',res)
          navigate( comingFrom,{replace:true})

        })
      }
   }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="">UserEmail</label>
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">User Password</label>
          <input type="password"
          value={password}
          onChange={(e)=>setPassword (e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
