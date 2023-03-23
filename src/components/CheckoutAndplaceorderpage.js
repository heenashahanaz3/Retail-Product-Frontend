import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const CheckoutAndplaceorderpage = () => {
  const [ite, setdata] = useState([])
  const [deliveryaddress, setdeliveryaddress] = useState('')
  const nav = useNavigate();


  const formHandler = fh => {
    setdeliveryaddress(fh.target.value)
  }

  useEffect(() => {
    axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        axios.get(`http://localhost:8085/user/getcart/${response.data}`).then(res => {
          let products = []

          res.data.map(item => {
            products.push(JSON.parse(item))
          })
          setdata(products)
        })
      })
  }, []);

  return (
    <div>
      <Container>
        <center>
          <div>
            <div className='row'>
              <table className='table table-striped table-bordered'>
                  <thead>
                    <tr>
                      {/* <th>Email</th> */}
                      <th>Product Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ite.map(item => (
                      <tr>
                        {/* <td>{response.data}</td> */}
                        <td>{item.name}</td>
                        <td>{item.price}/-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br></br>
                <center>
                <h5>Price: {window.localStorage.getItem('total')}/-</h5>
                {/* <Link to="/orderpage" className="btn btn-dark mx-4 mr-auto ">Order</Link> */}
                </center>
          
            </div>
            </div >
            <input type="text" name="text" value={deliveryaddress} className="form-control" placeholder="Enter Address" onChange={formHandler} autoFocus />
            {window.localStorage.setItem('Address',deliveryaddress)}
            <br />
            <button type="submit" className="btn btn-success" onClick={e => nav('/payment')}  >
              Buy Now
            </button>
        </center>
      </Container>

    </div>
  )
}


export default CheckoutAndplaceorderpage