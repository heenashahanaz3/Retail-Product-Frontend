import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 

function MyVerticallyCenteredModal(props) {
  let nav= useNavigate();
   function SubmitHandler(sh){
    sh.preventDefault();
    axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`).then(response =>{
      axios.post("http://localhost:8087/user/addorder",{
        email: response.data,
        cart: props.data,
        amount: window.localStorage.getItem('total'),
        deliveryaddress: window.localStorage.getItem('Address')
      }).then(ress => {
        if(ress.status===201){
          axios.delete(`http://localhost:8085/user/delete/${response.data}`)
          alert('Payment Successfull!')
          nav('/catlog')
        }
        
      })
    })
  }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Mode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Total Amount</h5>
        <p>
        {window.localStorage.getItem('total')}/-
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(sh) => SubmitHandler(sh)}>Pay now</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Paymentpage() {
  const [modalShow, setModalShow] = React.useState(false);
  const [items,setdata] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8082/get/${window.localStorage.getItem('jwt')}`)
      .then(response => {
        axios.get(`http://localhost:8085/user/get/${response.data}`).then(res => {
          setdata(res.data)
        })
      })
  }, []);

  return (
    <div className='payment'>
      <div className='payment-inner-b'>
       <center>
         <h5 style={{marginTop:"20px"}}>Price: {window.localStorage.getItem('total')}/-</h5>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Payment
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        data={items}
      />
      </center>
      </div>
    </div>
  );
}

export default Paymentpage;