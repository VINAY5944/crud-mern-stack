import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View() {



 

    const [detail,setdetail]=useState([])
    const {id}=useParams();


    useEffect(() => {
      
        const display=axios.get(`http://localhost:5000/getuniqueuser/${id}`).then((response)=>{

        setdetail(response.data)

        console.log(detail);
        })
        
    }, [])




  return (
    <div>
    <h1>{detail.name}</h1>
        <h1>{detail.email}</h1>





    </div>
  )
}

export default View