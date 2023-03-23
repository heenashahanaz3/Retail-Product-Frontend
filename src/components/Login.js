
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import {FiLogIn} from "react-icons/fi"
import Logo  from "C:/Users/heena.shaik/React Projects/Retail/src/assets/Logo.png"


function Login() {
  const [data,setdata] = useState({
    email: "",
    password: "",
  })

  const {email,password} = data

  const formHandler = fh =>{
    setdata({...data,[fh.target.name]:fh.target.value})
  }

  const validateForm = email.length > 0 && password.length > 0;

  function SubmitHandler(sh) {
    sh.preventDefault();
    axios.post("http://localhost:8082/authenticate",{
      email:email,
      password:password
    }).then(res =>{
      if(res.data === 'Login Failed!!'){
        alert('Enter Correct Email and Password!!!')
        return
      }else{
        window.localStorage.setItem('jwt',res.data)
        window.location.href = "/catlog" 
      }
    })
  }

  return (
    <div className="wrapper-inner">
        <div className="row">
          <center>
        <div className="wrapper-inner-a">
          <div className='col'>
           <img src={Logo} alt='error' className='img-login'></img>
          </div>
          <div className='col'>
          <div>
              <form onSubmit={SubmitHandler}>
                <div className="mb-3">
                
                  <input type="email" name="email" value={email} className="form-control" placeholder="Enter email" onChange={formHandler} autoFocus/>
                </div>

                <div className="mb-3">
                
                  <input type="password" name="password" value={password} className="form-control" placeholder="Enter password" onChange={formHandler} />
                </div>
                <div className='btn-lg-sp'>
                <button type="submit" className="btn btn-success" disabled={!validateForm}>
                    Login <FiLogIn />
                </button>
                </div>
                <div className="mt-3">
                       <p className="mb-3  text-center"  >
                         Don't have an account?{" "}
                         <a style={{color: "red",fontWeight:"100px"}}  href={"/signup"} >
                           Sign Up
                         </a>
                       </p>
                      
                       <p className="forgot-password text-right">
             <a href="/verificationpage"> Forgot password?</a>
             
         </p>
         
                     </div>
              </form>
            </div>
          </div>
        </div>
        </center>
      </div>
    </div>
   
  );

 
}



export default Login