import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate } from 'react-router-dom'


const SignUp = () => {

  let navs = useNavigate() 
  const [data,setdata] = useState({
    firstname : "",
    lastname : "",
    email : "",
    phonenumber:"",
  })

  const {firstname,lastname,email,phonenumber} = data

  const formHandler = fh =>{
    setdata({...data,[fh.target.name]:fh.target.value})
  }

  const disabledFunction = firstname.length > 0 && lastname.length > 0 && email.length > 0 && phonenumber.length > 0 ;

  const SubmitHandler= sh =>{
    sh.preventDefault();
 
    console.log(data)
    try {
        axios.post("http://localhost:8082/Employees/add",{
            firstname : firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
          
        });
        alert("Employee Regitration Successfull!")
        setdata(" ")
         navs('/')
        
    } catch (error) {
        alert("User Registration Failed!")
    }
  }

  function cancel(e){
    e.preventDefault()
    navs('/')
  }

  return (
    <div className='signup_container w-100 d-flex justify-content-center mt-5'>
      <div className='signup_form mt-5 w-50'>
        <center>
        <h4>SignUp Form</h4>
        </center>
        
      <div className='form mt-3'>
      <form autoComplete="off" autoSave='off' onSubmit={SubmitHandler} className='border p-3'>
        <div className= 'form' >
            <label><strong>First Name:</strong></label>
            <input type='text' minLength={4} placeholder='Enter Your First Name' value={firstname} name='firstname' onChange={formHandler} className='form-control'  />
     

            <label><strong>Last Name:</strong></label>
            <input type='text' minLength={4} placeholder='Enter Your Last Name' value={lastname} name='lastname' onChange={formHandler} className='form-control' />
   

            <label><strong>Email:</strong></label>
            <input type='email'  placeholder='Enter Your Email Name' value={email} name='email' onChange={formHandler} className='form-control' />
      
            <label><strong>Phone Number:</strong></label>
            <input type='number' min={5000000000} max={9999999999} placeholder='Enter Your Phone Number' value={phonenumber} name='phonenumber' onChange={formHandler} className='form-control' />
        
            
            <div className='mt-3'>
              <button  className='btn btn-primary w-50' onClick={cancel}>Cancel</button>
              <button className='btn btn-primary w-50' disabled={!disabledFunction} >SignUp</button>
            </div>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default SignUp




 