import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const Update = () => {

    let navigate = useNavigate();
    const [id, setID] = useState(0);
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setfirstname(localStorage.getItem('FirstName'));
        setlastname(localStorage.getItem('LastName'));
        setemail(localStorage.getItem('Email'));
        setphonenumber(localStorage.getItem('PhoneNumber'));
      
    }, []);



    const updateform = () => {
        axios.put(`http://localhost:8082/Employees/update/${id}`, {
            firstname,
            lastname,
            email,
            phonenumber,
            // addressline1,
            // addressline2,
            // city,
            // state
        }).then(() => {
            console.log("Updated")
        })
        navigate("/dashboard")
    }
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" >
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">
                                    <div className='form' >
                                        <label><strong>First Name:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Your First Name' value={firstname} name='firstname' onChange={(e)=> setfirstname(e.target.value)} className='form-control' />


                                        <label><strong>Last Name:</strong></label>
                                        <input type='text' minLength={4} placeholder='Enter Your Last Name' value={lastname} name='lastname' onChange={(e)=> setlastname(e.target.value)} className='form-control' />


                                        <label><strong>Email:</strong></label>
                                        <input type='email' placeholder='Enter Your Email Name' value={email} name='email' onChange={(e)=> setemail(e.target.value)} className='form-control' />


                                        <label><strong>Phone Number:</strong></label>
                                        <input type='number' min={5000000000} max={9999999999} placeholder='Enter Your Phone Number' value={phonenumber} name='phonenumber' onChange={(e)=> setphonenumber(e.target.value)} className='form-control' />


                                        <div className='mt-3'>
                                            <button className='btn btn-primary w-50' onClick={()=> navigate('/dashboard')} >Cancel</button>
                                            <button className='btn btn-primary w-50'  onClick={updateform} >Update</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Update