import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Navbar from '../../Components/Navbar/Navbar'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Bestseller from '../../Components/Bestseller/Bestseller'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Bestseller/>
        <Testimonial />
    </div>
  )
}

export default Home