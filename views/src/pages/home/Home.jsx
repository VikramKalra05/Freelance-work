import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import Features from '../../Components/Features/Features'
import About from '../../Components/About'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Features />
      <About />
    </div>
  )
}

export default Home