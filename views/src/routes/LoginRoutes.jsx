import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Components/Login&Signup/Login'
import Signup from '../Components/Login&Signup/Signup'


const LoginRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default LoginRoutes