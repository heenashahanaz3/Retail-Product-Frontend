
import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
//import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";
export function Login() {

  let navs = useNavigate() 
  const [data,setdata] = useState({
    email: "",
    password: "",
  })
 
  const {email,password} = data

  const formHandler = fh =>{
    setdata({...data,[fh.target.name]:fh.target.value})
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function SubmitHandler(sh) {
    sh.preventDefault();
    navs('/dashboard')
  }



  return (
    <div className='signup_container w-100 d-flex justify-content-center mt-5'>
      <div className='signup_form mt-5 w-50'>
        <center>
        <h4>Login</h4>
        </center>
        
      <div className='form mt-3'>
      <form autoComplete="off" autoSave='off' onSubmit={SubmitHandler} className='border p-3'>
        <div className= 'form' >

            <label><strong>Email:</strong></label>
            <input type='email'  placeholder='Enter Your Email Name' value={email} name='email' onChange={formHandler} className='form-control' />
            {/* {errors.email && <p style={{color:'red'}}>{errors.email}</p>} */}

            <label className='mt-2'><strong>Password:</strong></label>
            <input type='password' minLength={8} placeholder='Enter Your Password' value={password} name='password' onChange={formHandler} className='form-control' />
            {/* {errors.password && <p style={{color:'red'}}>{errors.password}</p>} */}
            
            <div className='mt-3'>
              <button  className='btn btn-primary w-50' >Cancel</button>
              <button className='btn btn-primary w-50' disabled={!validateForm} >Login</button>
            </div>
        </div>
      </form>
      </div>
      </div>
    </div>

  );

}

export default Login
// {data.map(item => <li key={item.id} > {item.first_name}</li>)}