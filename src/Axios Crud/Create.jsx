import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import './Create.css'

const Create = () => {
    const[values,setValues]=useState({name:"",email:""})
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:3000/users",values)
        .then(res=>{
            console.log(res)
            navigate('/')
        })
    }
  return (
    <div className='Create'>
        <form className='form'>
            <h1>Create User Details</h1>
            <br />
            <input type='text' name='name' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Name"></input>
            <br /><br />
            <input type="text" name='email' onChange={(e)=>setValues({...values,[e.target.name]:e.target.value})} placeholder="Enter Your Email"></input>
            <br /><br />
            <button type='submit' onClick={handleSubmit} className="btn">Submit</button>
            <Link to={'/'}><button className='btn2'>Back</button></Link>
        </form>
    </div>
  )
}

export default Create