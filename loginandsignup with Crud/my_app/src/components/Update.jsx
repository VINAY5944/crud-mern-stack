import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {


    const {id}=useParams()

const [detail,setdetail]=useState([])
const  [name,setName]=useState(detail.name)
const [email,setEmail]=useState(detail.email)
const [password,setPassword]=useState(detail.password)
const navigate = useNavigate()
useEffect(() => {
      
    const display=axios.get(`http://localhost:5000/getuniqueuser/${id}`).then((response)=>{

    setdetail(response.data)

    console.log(detail);
    })


    
    
}, [])





const singleupdate=async()=>{

    const data={name,email,password}
    const uptd=  await  axios.put(`http://localhost:5000/updateuser/${id}`,data)

    // navigate("/")

}



  return (
    <div>

<form  onSubmit={singleupdate}>

<label>name <input  placeholder={detail.name} Value={detail.name} type="text" name='name' onChange={(e)=>{setName(e.target.value)}} /></label>
<label> email <input  placeholder={detail.email}  Value={detail.email} type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}} /></label>
<label>password<input  Value={detail.password} type="text" name='password' onChange={(e)=>{setPassword(e.target.value)}} /></label>
<Link to={"/"}><button type='submit' onClick={singleupdate}>update</button>
</Link>

</form>






    </div>
  )
}

export default Update