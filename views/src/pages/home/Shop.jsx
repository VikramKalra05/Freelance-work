import React from 'react'
import Filter from '../../assets/filter.png'

const Shop = () => {
  return (
    <div>
      <nav className='shopNavbar flex bg-gray-200 justify-center h-16 items-center' >
        <ul className='flex items-center gap-6 ml-16 font-medium cursor-pointer'>
          <li>Drink1</li> 
          <li>Drink2</li>
          <li>Drink3</li>
          <li>Mixes</li>
          <li>Vegan</li>
          <li>Keto</li>
        </ul>
        <img src={Filter} alt="filter" className='h-8 relative'/>
      </nav>
      
    </div>
  )
}

export default Shop