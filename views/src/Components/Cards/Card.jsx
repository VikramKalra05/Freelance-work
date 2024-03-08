import React from 'react'


const products = [
  {
    id: 1,
    name: 'Red Bull',
    href: '#',
    imageSrc: 'https://i.pinimg.com/originals/28/a1/69/28a1692994558ee2b39cc9f7f44c74b8.jpg',
    imageAlt: "Red Bull Give You Wings",
    imageDesc: "Product Desc",
    price: '₹ 100',

  },
  {
    id: 2,
    name: 'Monster',
    href: '#',
    imageSrc: 'https://images.pexels.com/photos/8155195/pexels-photo-8155195.jpeg',
    imageAlt: "Front of men's Basic Tee in black.",
    imageDesc: "Product Desc",
    price: '₹ 115',

  },
  {
    id: 3,
    name: 'Prime',
    href: '#',
    imageSrc: 'https://www.jiomart.com/images/product/original/rveibld2hd/prime-hydration-drink-lemon-lime-500-ml-imported-product-images-orveibld2hd-p604235481-1-202401151512.jpg?im=Resize=(1000,1000)',
    imageAlt: "Front of men's Basic Tee in black.",
    imageDesc: "Product Desc",
    price: '₹ 1600',

  },
  ]
  
const Card = () => {
  return (
    <div  className='flex flex-col justify-center items-center '>
      <div className='text-5xl font-[poppins] font-semibold mt-20 mb-10'>Our Products</div>
      
    <div className='flex flex-row justify-center mt-5 w-screen gap-10    '>

      {products.map((product) => (

        <div className='bg-white md:h-[105vh] h-[40vh] flex-col flex border border-black border-t-0 transform transition-transform hover:scale-110'>
          <div className=' bg-red-500 h-[25vh] w-[30vh] md:w-[60vh] md:h-[55vh] border border-black'>
            <div className=''>
            <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className='md:w-[72.6vh] md:h-[55vh] object-cover'
              />
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
              <p className='text-2xl font-thin'>{product.imageDesc}</p>
              <p className='text-5xl font-semibold mt-2'>{product.name}</p>
              <p className='text-2xl font-thin mt-4'>About Product</p>
              <p className='font-semibold text-xl mt-2'>{product.price}</p>
              <button className='bg-[#1F2544] text-white font-semibold rounded-full py-6 px-20 mt-10 mb-0 hover:text-[#FFD0EC] hover:bg-[#474F7A] hover:shadow-md hover:shadow-black'>Buy now</button>
            </div>
          </div>
        </div>
      ))
      }
    </div>
    </div>
  )
}

export default Card