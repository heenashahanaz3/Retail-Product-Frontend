import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Login from './components/Home'
import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import Header from './components/Header'
import Update from './components/Update'

const App = () => {
  return (
    <div>
      {/* <Home />
      <SignUp /> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />}  />
          <Route path='/signup' element={<SignUp />}  />
          <Route path = '/dashboard' element={<DashBoard/>} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App