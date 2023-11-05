import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="container">
        <div className="row">
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'> Login</h2>

            {/* <form onSubmit={(e)=>onSubmit(e)}> */}
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>User Id</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your User Id"
                name="loginUserId"
                // value={LoginUserId}
                // onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>Password</label>
                <input
                type={"text"}
                className="form-control"
                placeHolder="Enter your password"
                name="password"
                // value={Password}
                // onChange={(e)=>onInputChange(e)}
                >
                </input>
            </div>
            <button id="loginSubmitButton" type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link id="forgotPassword"  className='btn btn-outline-danger mx-2' to="/">Forgot Password</Link>
            {/* </form> */}
            </div>
        </div>
    </div>
  )
}
