import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import DashBoard from './components/DashBoard'
import Header from './components/Header'
import Update from './components/Update'
import Passwordverificationpage from './components/PasswordVerificationPage'
import Calculator from './components/calculator'
import Todo from './components/Todo'
//import Context from './components/Context/Context'
//import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
    
        {window.localStorage.getItem('jwt') ?
          <Routes>
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/update/:id' element={<Update />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/todo' element={<Todo />} />
            {/* <Route path='/addCompany' element={<Context />} />
            <Route path='/searchcity' element={<Filter />} /> */}

          </Routes>
          :
          <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/verificationpage' element={<Passwordverificationpage />} />
        </Routes>
        }
        
      </BrowserRouter>

    </div>
  )
}

export default App