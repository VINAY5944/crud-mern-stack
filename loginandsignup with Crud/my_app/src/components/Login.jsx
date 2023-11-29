import axios from 'axios';
import React, { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';
function Login() {


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()
    const submit=async(e)=>{

      e.preventDefault();
      const display=await axios.post('http://localhost:5000/login',{email,password})
      
     if(display){
  
    navigate('/loginsuccess')
     }

     else{
      alert('wrong credentials')
     }

      console.log(display.data);
        }
      

  
  


  return (
    <div className='main'>
        login
        <form  onSubmit={submit}><label>EMAIL:<input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' type="email"></input></label>


<label>PASSWORD:<input value={password} onChange={(e)=>{setPassword(e.target.value)}}   placeholder="password"  type='text'></input></label>

<button type='submit'>login</button>


</form>

      
      
      
      
      
      
      
      
      
      
    
      
      
      
      
      
      
      </div>
  )
}

export default Login