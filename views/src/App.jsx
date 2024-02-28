import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Carousel from './Components/Carousel/Carousel'
import Signup from './Components/Login&Signup/Signup'
import Login from './Components/Login&Signup/Login'
import AllRoutes from './routes/AllRoutes'
import LoginRoutes from './routes/LoginRoutes'
import Footer from './Components/Footer/Footer'




function App() {


 
  return (
    <>
    <Navbar/>
    <AllRoutes />
    <LoginRoutes/>
    
    <Footer/>
    </>
  )
}

export default App
