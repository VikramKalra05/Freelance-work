const products = [
    {
      id: 1,
      name: 'Red Bull',
      href: '#',
      imageSrc: 'https://i.pinimg.com/originals/28/a1/69/28a1692994558ee2b39cc9f7f44c74b8.jpg',
      imageAlt: "Red Bull Give You Wings",
      imageDesc:"gnjefjgnjfdgnjefngfkngfnkgnkfdgjfjgnfgnjfgnjfjgnjfgnjfgfjgnjfg",
      price: '₹ 100',
      
    },
    {
        id: 2,
        name: 'Monster',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/8155195/pexels-photo-8155195.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        imageDesc:"gnjefjgnjfdgnjefngfkngfnkgnkfdgjfjgnfgnjfgnjfjgnjfgnjfgfjgnjfg",
        price: '₹ 115',
        
      },
      {
        id: 3,
        name: 'Prime',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/8155195/pexels-photo-8155195.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        imageDesc:"gnjefjgnjfdgnjefngfkngfnkgnkfdgjfjgnfgnjfgnjfjgnjfgnjfgfjgnjfg",
        price: '₹ 100',
        
      },
      {
        id: 4,
        name: 'Red Bull',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/8155195/pexels-photo-8155195.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹ 100',
        
      },
      

   
  ]
  
  export default function Card() {
    return (
      <div className="bg-white font-[poppins] ">
        <div className="">
          <h2 className="text-4xl font-bold flex justify-center mt-5 ">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 ml-4 md:gap-56 mt-10 mb-5 sm:grid-cols-2 md:ml-48">
  
            {products.map((product) => (
              <div key={product.id} className="group relative rounded-md">
                <div className=" w-[20vh] md:w-[30vh] overflow-hidden rounded-md bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="mt-4 flex flex-col justify-between md:w-[30vh] w-[20vh]">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <button className="bg-[#8B7E74] text-white py-2 px-6 hover:bg-[#F1D3B3] mt-3">Buy Now</button>
                </div>
              </div>
            ))}
  
          </div>
        </div>
      </div>
    );
  }