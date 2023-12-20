import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './Update.css'

const Update = () => {
    const [values, setValues] = useState({ name: "", email: "" });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        
        axios.get(`http://localhost:3000/users/${id}`)
            .then(res => setValues(res.data))
            .catch(error => console.error(error));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='Update'>
            <form className='form'>
                <h1>Update User Details</h1>
                <br />
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                    placeholder="Enter Your Updated Name"
                ></input>
                <br /><br />
                <input
                    type="text"
                    name='email'
                    value={values.email}
                    onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                    placeholder="Enter Your Updated Email"
                ></input>
                <br /><br />
                <button type='submit' onClick={handleSubmit} className="btn">Update</button>
                <Link to={'/'}><button className='btn2'>Back</button></Link>
            </form>
        </div>
    );
};

export default Update;
