import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { json } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Cartpage() {
  const [items, setdata] = useState([])
  const [isempty, setisempty] = useState(false)

    function handleDelete(e,id){
        e.preventDefault();
        console.log(id)
        axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
        .then(response => {
          console.log(response.data)
        axios.put("http://localhost:8085/user/delproduct", {
          email: response.data,
          cart: id,
        }).then( res=>{
          if(res.status===200){
            window.location.reload();
          }
        }

        )
        .catch(error => console.error(error));
      })
    }

  useEffect(() => {
    axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        axios.get(`http://localhost:8085/user/getcart/${response.data}`).then(res => {
          let products = []
          
          res.data.map( item => {
              products.push(JSON.parse(item))
          })
          setdata(products)
        })
      })
  }, []);


  const totalprice = items.map(item=>item.price).reduce((accumulator,currentValue)=>accumulator+currentValue,0);
  return (
    <div>
    <Container>
      {isempty ?
        <div> Cart Is Empty</div>
        :
        <div>
             <div className='row'>
        <table className='table table-striped table-bordered'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.category}</td>
                                <td>{item.name}</td>
                                <td>{item.price}/-</td>
                                <td>
                                    <div><Button  onClick={(e)=>handleDelete(e,item.id)}>Delete</Button></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br>
                <center>
                <h5>Total Price of all products : {totalprice}/-</h5>
                
                {window.localStorage.setItem('total',totalprice)}
                <Link to="/orderpage" className="btn btn-dark mx-4 mr-auto ">Place Order</Link>
                </center>
                </table>
                </div>
            
        </div>
      }
    </Container>
    </div>

  )
}