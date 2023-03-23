import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';

const YourOrders = () => {
    const [data,setdata] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
          .then(response => {
            axios.get(`http://localhost:8087/user/get/yourorders/${response.data}`).then(res => {
              setdata(res.data)
            })
          })
      }, []);

    return(
    <div>
    <Container>
        <div>
             <div className='row'>
        <table className='table table-striped table-bordered'>
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Cart Details</th>
                            <th>Amount</th>
                            <th>Delivery Address</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <td>{item.orderid}</td>
                                <td>{item.cart}</td>
                                <td>{item.amount}/-</td>
                                <td>{item.deliveryaddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </table>
                </div>
            
        </div>
    </Container>
    </div>

  )
}

export default YourOrders
