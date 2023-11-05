import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function AddStudent() {

    let navigate = useNavigate();
    const [addstudent,setStudent]=useState({
            name:"",
            roll:"",
            marks1:"",
            marks2:"",
            marks3:"",
            marks4:"",
            marks5:"",
            marks6:""
    })
    const{name,roll,marks1,marks2,marks3,marks4,marks5,marks6}=addstudent
    
    const onInputChange=(e)=>{
        setStudent({...addstudent, [e.target.name]: e.target.value})

    }

    // const SubmitSuccess = () => {
    //     const [isSubmitClicked, setSubmitClicked] = useState(false)
    // }

    // const HandleSubmit = () => {
    //     setSubmitClicked(true);
    //   };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/students/addstudent",addstudent)
        navigate("/")
        return(
        <script>
            function myAlert() {
            alert("Student Added Successfully..!!")
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
                placeHolder="Enter student name"
                name="name"
                value={name}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Roll</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter student Roll No"
                name="roll"
                value={roll}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks1</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks1"
                name="marks1"
                value={marks1}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks2</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks2"
                name="marks2"
                value={marks2}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks3</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks3"
                name="marks3"
                value={marks3}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks4</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks4"
                name="marks4"
                value={marks4}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks5</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks5"
                name="marks5"
                value={marks5}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Marks6</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter Marks6"
                name="marks6"
                value={marks6}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>

            <button id="addUserSubmitButton" type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link id="cancelButton"  className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
            </form>
            </div>
        </div>
    </div>
  )
}
