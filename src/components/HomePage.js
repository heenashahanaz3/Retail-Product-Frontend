import React from 'react'
import CarouselFade from '../Utils/carousel'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Card1 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/Card1.jpg'
import Card2 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/Card2.jpg'
import Card3 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/Card3.jpg'
import Card4 from 'C:/Users/heena.shaik/React Projects/Retail/src/assets/Card4.jpg'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const HomePage = () => {
  let nav = useNavigate();

  return (
   <>
   <div className='py-5'>
    {<CarouselFade></CarouselFade>}
    </div>
            <Container>
      <Row  md={4.5}>
        <Col style={{marginLeft:"-60px",marginTop:"-40px"}}>
    <div className='homepage1'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Card1} style={{height:"170px",width:"240px"}} />
      <Card.Body>
        <Card.Title>Smart Watch</Card.Title>
        <Card.Text>
        Bluetooth Calling Smartwatch starts at 1500rs
        </Card.Text>
        <Button className='btn btn-outline-dark' onClick={e => nav('/login')} >Shop Now</Button>
      </Card.Body>
    </Card>
    </div>
    </Col>


 <Col style={{marginTop:"-40px"}}>
 <div className='homepage2'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Card2} style={{height:"170px",width:"240px"}} />
      <Card.Body>
        <Card.Title>Laptop,Earbuds etc..</Card.Title>
        <Card.Text>
        Up to 70% off | Clearance store
        </Card.Text>
        <Button variant="primary" onClick={e => nav('/login')}>Shop Now</Button>
      </Card.Body>
    </Card>

   </div>   
   </Col>
 
   <Col style={{marginTop:"-40px"}}>
 <div className='homepage3'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Card3}  style={{height:"170px",width:"240px"}} />
      <Card.Body>
        <Card.Title>ASUS ROG Strix G17, 17.3"(43.94 cms)FHD </Card.Title>
        <Card.Text>
        ASUS Laptop Upto 33% off
        </Card.Text>
        <Button variant="primary" onClick={e => nav('/login')}>Shop Now</Button>
      </Card.Body>
    </Card>

   </div>
   </Col>

   <Col style={{marginTop:"-40px"}}>
 <div className='homepage3'>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Card4}  style={{height:"170px",width:"240px"}} />
      <Card.Body>
        <Card.Title>LG 32 (80 cm) LED 2560 x 1440 Pixels</Card.Title>
        <Card.Text>
        LG TV starts at 30000/-
        </Card.Text>
        <Button variant="primary" onClick={e => nav('/login')}>Shop Now</Button>
      </Card.Body>
    </Card>

   </div>
   </Col>

   
   </Row>
    </Container>
 
   
   </>
    
  )
}

export default HomePage