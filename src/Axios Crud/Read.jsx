import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import './Read.css'


const Read = () => {
    const[data,setData]=useState([])
    const {id} = useParams()
    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id)
        .then((res)=>setData(res.data))
    })
  return (
    <div className='Read'>
        <section className='section'>
            <h1 className='readh1'>Reading a Data</h1>
            <br />
            <div className='span'>
            <p><span></span>:{data.name}</p>
            <p><span></span>:{data.email}</p>
            </div>
            <br />
            <button className='btn'>Edit</button>
           <Link to={'/'}><button className='btn2'>Back</button></Link> 
          
        </section>
    </div>
  )
}

export default Read