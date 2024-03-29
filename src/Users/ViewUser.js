import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

export default function ViewStudent() {

    let navigate = useNavigate();

    const {id}= useParams();

    const [student,setStudent]=useState({
            name:"",
            roll:"",
            marks1:"",
            marks2:"",
            marks3:"",
            marks4:"",
            marks5:"",
            marks6:""

    })

    const{name,userName,email}=student

    // const onInputChange=(e)=>{
    //     setUser({...user, [e.target.name]: e.target.value})

    // };

    useEffect( () => {
        loadStudent();  
    }, []);
    

    // const onSubmit=async (e)=>{
    //     e.preventDefault();
    //     await axios.put(`http://localhost:8080/user/${id}`,user);
    //     navigate("/");
    // };

    const loadStudent = async () => {
        const result=await axios.get(`http://localhost:8080/user/${id}`,student);
        setStudent(result.data)
    }

  return (
    <div className="container">
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> View User</h2>

            {/* <form onSubmit={(e)=>onSubmit(e)}> */}
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input
                type={"text"}
                className="form-control convex"
                placeHolder="Enter your name"
                name="name"
                value={name}
                // onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>User Name</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your userName"
                name="userName"
                value={userName}
                // onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>Email</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your email"
                name="email"
                value={email}
                // onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            {/* <button id="submitButton" type='submit' className='btn btn-outline-primary'>Submit</button> */}
            <Link id="cancelButton"  className='btn btn-outline-danger' to="/">Cancel</Link>
            {/* </form> */}
            </div>
        </div>
    </div>
  )
}
