import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Shop from '../pages/home/Shop'



const AllRoutes = () => {
  return (    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
    </Routes>
  )
}

export default AllRoutes