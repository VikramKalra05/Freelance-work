import React from 'react';
import Logo from '../../assets/logo.svg'
import Location from '../../assets/Location.svg'
import Telephone from '../../assets/Telephone.svg'
import Mail from '../../assets/Mail.svg'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-r from-[#81689D] via-pink-300 to-purple-300 text-black pt-28 md:h-[60vh] h-[100vh] md:pl-[20vh]'>

      {/* Column 1 */}
      <div className='mb-10 md:mb-0 flex'>
        <img src={Logo} alt="logo" className='h-20 w-20 m-6' />
        <div className='m-2'>
          <p className='mt-4 text-2xl font-bold'>XYZ beverages</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='flex gap-6 mt-4'>
            <button className='bg-[#8B7E74] text-white rounded-xl py-2 px-6 '>About Us</button>
            <button className='bg-[#8B7E74] text-white rounded-xl py-2 px-6 '>Write to us</button>
          </div>
          <div className="socials flex gap-4 mt-10">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook" className='w-6 h-6' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="insta" className='w-6 h-6' />
            <img src="https://www.sarkarinaukriexams.com/images/import/sne21299025521.png" alt="X-logo" className='w-6 h-6' />
            <img src="https://www.svgrepo.com/show/183606/youtube.svg" alt="Youtube" className='w-6 h-6' />
          </div>
        </div>

      </div>

      {/* Column 2 */}
      <div className="ml-16">
        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className='bg-black h-10 w-10 absolute rounded-full opacity-50'></div>
          <img src={Location} alt="Location-icon" className='h-6 w-6 z-10 m-2' />
          <p className='ml-12  mt-1 max-w-[70vh]'>334, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
        </div>

        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className='bg-black h-10 w-10 absolute rounded-full opacity-50'></div>
          <img src={Telephone} alt="Location-icon" className='h-6 w-6 z-10 m-2' />
          <p className='ml-12  mt-1 max-w-44'>+91 626347384934</p>
        </div>

        <div className='m-0 p-0 mt-10 flex text-lg'>
          <div className='bg-black h-10 w-10 absolute rounded-full opacity-50'></div>
          <img src={Mail} alt="Location-icon" className='h-6 w-6 z-10 m-2' />
          <p className='ml-12  mt-1 max-w-44'>xyz@gmail.com</p>
        </div>



      </div>
    </div>
  );
};

export default Footer;
