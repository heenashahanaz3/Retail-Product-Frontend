import React from 'react'
import axios from "axios"
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col,Container } from 'react-bootstrap';
import AutoLogout from './AutoLogout'

const Productcatlog=()=>{
    const [data,setdata] = useState([])

    function catevent(e,c){
        e.preventDefault();
    
        window.localStorage.setItem("cat",c)
        window.location.href="/productdetails"
        
    }

    useEffect(()=>{
        axios.get(`http://localhost:8086/catlog/get`)
             .then(response => {
                setdata(response.data);
                console.log(data)
             })
             .catch(error =>{
                console.log(error);
             });
            },[]);

    return(
        <AutoLogout>
   <Container>
        <div className='catlog container'>
          
            <div className='row'>
            {data.map((item) => {
            return (
                <div className='col-md-3 prod'>
            <div className='catlogclass'>
                <Card  style={{ width: '13rem' }}>
      <Card.Img  variant="top" style={{height:"170px",width:"207px"}} src={item.split(",")[1]} />
      <Card.Body>
        <Card.Title>{item.split(",")[0]}</Card.Title>
        <Button className='btn btn-outline-dark' onClick={(e) => catevent(e,item.split(",")[0])} >ShopNow</Button>
      </Card.Body>
    </Card>
            </div>
            </div>)})}
           
        </div>
        </div>
        </Container>

        </AutoLogout>
    )

}
export default Productcatlog;