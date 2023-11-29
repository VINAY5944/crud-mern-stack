import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import '../css/signup'
function Signup() {



  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const navigate =useNavigate()

  const submit=async(e)=>{

e.preventDefault();
const display=await axios.post('http://localhost:5000/token',{name,email,password})
navigate(-1)
console.log(display.data);
  }





  return (
    <div>

      <form onSubmit={submit} ><label>NAME:<input  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' type='text'></input></label>

<label>EMAIL:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' type="email"></input></label>


<label>PASSWORD:<input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"  type='text'></input></label>

<button type="submit"  >signup</button>   



</form>









    </div>
  )
}

export default Signup