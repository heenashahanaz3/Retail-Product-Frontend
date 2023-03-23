import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { GiCancel } from "react-icons/gi"
import { SiGnuprivacyguard } from "react-icons/si"
import Logo  from "C:/Users/heena.shaik/React Projects/Retail/src/assets/Logo.png"


const SignUp = () => {

  let navs = useNavigate()
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: ""
  })

  const { firstname, lastname, email, phonenumber, password, confirmpassword } = data

  const formHandler = fh => {
    setdata({ ...data, [fh.target.name]: fh.target.value })
  }

  const disabledFunction = firstname.length > 0 && lastname.length > 0 && email.length > 0 && phonenumber.length > 0 && password.length > 0;

  const SubmitHandler = sh => {
    sh.preventDefault();
      axios.post("http://localhost:8081/user/add", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        password: password,

      }).then(res => {
        if(res.data === "Email id already exist!!"){
          alert("Email already exists!!")
        }else{
          alert("Regitration Successfull!")
          setdata(" ")
          navs('/')
        }
      });
  }

  function cancel(e) {
    e.preventDefault()
    navs('/')
  }

  return (
    <div className="wrapper-inner-signup">
      <div className='row'>
        <center>
      <div className="wrapper-inner-a-signup">
        <div className='col'>
          <img className='img-signup' src={Logo} alt="" />
        </div>
        <div className='col'>
          <div>
            <form onSubmit={SubmitHandler}>
                  <label></label>
                  <input type="text" name="firstname"  value={firstname} className="form-control" placeholder="Enter Your Firstname" onChange={formHandler} autoFocus />
         
                  <label></label> 
                  <input type="text" name="lastname" value={lastname}  placeholder="Enter Your Lastname" className="form-control" onChange={formHandler}  />
           
                  <label></label>
                  <input  type="email" name="email" value={email} placeholder="Enter Your Email Address" className="form-control"  onChange={formHandler} />
              
                <label></label>
                <input type="text"  minLength={10} maxLength={10} name="phonenumber" value={phonenumber} className="form-control" placeholder="Enter Your Phonenumber" onChange={formHandler}  />
              
                  <label></label>
                  <input min={6} max={20} type="password" name="password"  minLength={6}  value={password}  className="form-control" placeholder="Enter password"  onChange={formHandler} />
            
                <label></label>
            <input type='password'  placeholder='Re-enter Password' value={confirmpassword} name='confirmpassword' onChange={formHandler} className='form-control' />
            {password !== confirmpassword ? <h6 style={{color : "red"}} >Passwords not matched!</h6> : null }
            
                 <label></label>
              <div className="btn-lg-sp">
             
              <button  className='btn btn-light' onClick={cancel}>Cancel <GiCancel/></button>
                <button type="submit" className="btn btn-info" disabled={!disabledFunction}>
                  Sign Up <SiGnuprivacyguard/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </center>
    </div>
    </div>
  )

  
}

export default SignUp






