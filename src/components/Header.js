import React from 'react'
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'


const Header = () => {

  function logout(e) {
    window.localStorage.removeItem('jwt')
    window.location.href = '/' 
  }

  let nav = useNavigate()

  return (

    <div>
      <Navbar bg="dark" variant="dark">

<Container>
    <NavbarBrand href="/"><center>Retail Web Application</center></NavbarBrand>
    <Nav>
            {
              window.localStorage.getItem('jwt') ? 

              <>
              <Nav.Link onClick={h => nav('/catlog')}>Home</Nav.Link>&nsbp
              <Nav.Link onClick={e => nav('/cart')}>Cart <BsCart4 /></Nav.Link>&nsbp
              <Nav.Link onClick={e => nav('/yourorders')}>Your Orders </Nav.Link>&nsbp
              <Nav.Link onClick={e => logout(e)} >Logout </Nav.Link>&nsbp
              </>
         
              : 
              <>
              <Nav.Link onClick={h => nav('/')}>Home</Nav.Link>&nsbp
              <Nav.Link onClick={h => nav('/login')}>Login</Nav.Link>&nsbp
              <Nav.Link onClick={h => nav('/signup')}>SignUp</Nav.Link>&nsbp
              
              </>
            }
    </Nav>
</Container>
</Navbar>
    </div>
  )
}

export default Header