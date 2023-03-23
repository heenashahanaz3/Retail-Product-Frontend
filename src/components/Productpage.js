import axios from 'axios';
import React from 'react'
import {Container} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';


const Productpage = () => {

    const [data, setdata] = useState([]);
   

    const cartpage=(e,id) =>{
        e.preventDefault();
        axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
        .then(response => {
            axios.get(`http://localhost:8085/user/get/${response.data}`).then(
                res => {
                    let temp=""
                    if(res.data !== ""){
                        temp= res.data+","+id.toString()
                    } else {
                        temp= id.toString()
                    }
                    axios.put(`http://localhost:8085/user/addcart`,{
                        email:response.data,
                        cart: temp
                    }).then(ress => {
                        console.log(ress.data)
                        alert("Added to cart")
                    })
                }
            )
        })
       
    }
    useEffect(() => {
        axios.get(`http://localhost:8086/catlog/get/${window.localStorage.getItem("cat")}`)
            .then(response => {
                setdata(response.data);
                console.log(data)
            })
            .catch(error => {
                console.log(error);
            }); 
    }, []);

    
    return(
        <Container>
        <div className='catlog container'>
            <div className='row'>
            {data.map(item =>{
                return (
                    <div className='col-md-4 prod'>

                <div className='catlogclass'>           
                    <Card style={{ width: '13.1rem',height:'450px',borderColor:"gray"}}>
                        <Card.Img variant="top" style={{height:"200px",width:"207px"}} src={item.imageurl} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>Price: {item.price}/-</Card.Text>
                           
                            <Button className='btn btn-outline-dark' onClick={(e) => cartpage(e,item.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
       
                  
                    </div>
            </div>)})}
           
        </div>
        </div>
        </Container>
    )
}
export default Productpage;