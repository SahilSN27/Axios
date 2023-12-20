import { useEffect,useState } from "react"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom"
import './Home.css'

const Home = () => {

    
    const[data,setData]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setData(res.data))
        
    }
    )

    function handleDelete(id){
        axios.delete("http://localhost:3000/users/"+id)
        .then(res=>{
            console.log(res)
            navigate('/')
        })
    }
  return (
    <div className="Home">

        <aside style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h1>User Lists</h1>
            <Link to={'/create'}><button className="Add">Add+</button></Link>
        </aside>
        <table className="table">
            <thead className="thead">
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Email</b></td>
                    <td><b>Action</b></td>
                </tr>
            </thead>
            <tbody>
                { data.length >0 && data.map((user,index)=>{
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                   <Link to={`/read/${user.id}`}><button className="Read">Read</button></Link> 
                                   <Link to={`/update/${user.id}`}><button className="Edit">Edit</button></Link> 
                                    <button onClick={()=>handleDelete(user.id)} className="Delete">Delete</button>
                                </td>
                            </tr>

                        )
                    }
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home