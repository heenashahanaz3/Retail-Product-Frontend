import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Passwordverificationpage from './components/PasswordVerificationPage'
import YourOrders from './components/YourOrders'
import HomePage from './components/HomePage'
import Productcatlog from './components/Productcatlog'
import Productpage from './components/Productpage'
import Cartpage from './components/Cartpage'
import CheckoutAndplaceorderpage from './components/CheckoutAndplaceorderpage'
import Paymentpage from './components/Paymentpage'
import AutoLogoutPage from './components/AutoLogoutPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
    
        {window.localStorage.getItem('jwt') ?
          <Routes>
            <Route path='/catlog' element={<Productcatlog />} />
            <Route path='/productdetails' element={<Productpage  />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/orderpage' element={<CheckoutAndplaceorderpage />} />
            <Route path='/payment' element={<Paymentpage />} />
            <Route path='/yourorders' element={<YourOrders/>} />
          
          </Routes>
          :
          <Routes>
          <Route path ='/' element = {<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/verificationpage' element={<Passwordverificationpage />} />
          <Route path='/sessionlogoutpage' element={<AutoLogoutPage/>} />
          
        </Routes>
        }
        
      </BrowserRouter>

    </div>
  )
}

export default App