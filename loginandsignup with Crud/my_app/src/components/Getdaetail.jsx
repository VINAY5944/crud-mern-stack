import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button, Modal } from 'react-bootstrap'

function Getdaetail() {
 
    const [deleteid,setDeleteId]=useState('')
    const [show, setShow] = useState(false);
    const [detail,setdetail]=useState([])
    const handleClose = (e) =>{ 
      
        setShow(false)};
    const handleShow = () => setShow(true);


    useEffect(() => {
      
        const display=axios.get('http://localhost:5000/getuser').then((response)=>{

        setdetail(response.data)
        })
        
    }, [])
    
const del=()=>{

  const display=axios.delete(`http://localhost:5000/deleteuser/${deleteid}`).then((response)=>{
    

 
  })
  
  setdetail(detail.filter((del1)=>del1._id !== deleteid))

  setShow(false)
}
    
      const shw=(_id)=>{
        setDeleteId(_id)
        setShow(true)
        console.log(deleteid)
      }    




  return (
    <div>

        <table style={{border:'solid'}}>
<th>name</th>
<th>password</th>
<th>email</th>
<th>delete</th>
<th>view</th>
<th>update</th>
        {detail.map((item)=>


<>
<tr style={{border:'solid'}} >
  <td style={{border:'solid'}}>{item.name}</td>  
  <td style={{border:'solid'}}>{item.password}</td>
   <td style={{border:'solid'}} >{item.email}</td> 
   
   {/* <input type="button"  placeholder='delete' value="Delete" onClick={()=>{shw(item._id)}}> */}
    
      {/* </input> */}
<button onClick={()=>{shw(item._id)}}>delete</button>
   <td><Link to={`/getqwerty/${item._id}`}><button>view</button></Link></td>
   <td><Link to={`/update/${item._id}`}><button>update</button></Link></td>
    </tr>




    </>


)}





        </table>

 <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>do you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={del}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Link to='/login'><button>login</button></Link>
 <Link to='/signup'><button>signup</button></Link>
    </div>
  )
}

export default Getdaetail