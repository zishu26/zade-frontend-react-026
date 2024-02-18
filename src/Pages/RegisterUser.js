import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function RegisterUser() {

    let navigate = useNavigate();
    const [loginuser,setUser]=useState({
        loginUserId:"",
        loginUserName:"",
        loginUserContactNumber:"",
        password:""
    })

        
    const{loginUserId,loginUserName,loginUserContactNumber,password}=loginuser
    
    const onInputChange=(e)=>{
        setUser({...loginuser, [e.target.name]: e.target.value})

    }

    // const SubmitSuccess = () => {
    //     const [isSubmitClicked, setSubmitClicked] = useState(false)
    // }

    // const HandleSubmit = () => {
    //     setSubmitClicked(true);
    //   };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/createLoginUser",loginuser)
        navigate("/")
        return(
        <script>
            function myAlert() {
            alert("User Registered Successfully..!!")
            }
        </script>
        )
    };

  return (
    <div className="container">
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Add New Student</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your name"
                name="loginUserName"
                value={loginUserName}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>User Id</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your User ID"
                name="loginUserId"
                value={loginUserId}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='MubileNumber' className='form-label'>Mobile Number</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your mobile number"
                name="loginUserContactNumber"
                value={loginUserContactNumber}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Password' className='form-label'>Password</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Choose your password"
                name="password"
                value={password}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <button id="registerSubmitButton" type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link id="cancelButton"  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
            </div>
        </div>
    </div>
  )
}
