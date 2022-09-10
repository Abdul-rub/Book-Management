import React, { useState } from 'react'

export const Login = () => {
   const [email,setEmail] = useState('')
   const [password,setPassword]=useState('')

   const handleSubmit=()=>{
    
   }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="">UserEmail</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">User Password</label>
          <input type="password" />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
