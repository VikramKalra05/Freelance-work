import React from 'react';

const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-11 bg-gradient-to-r from-teal-300 via-pink-300 to-purple-300 text-black p-10'>

      {/* Column 1 */}
      <div className='mb-10 md:mb-0'>
        <h1 className='text-xl font-bold'>Logo</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <div className="socials flex gap-4 mt-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="facebook" className='w-6' />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="insta" className='w-6' />
          <img src="https://www.sarkarinaukriexams.com/images/import/sne21299025521.png" alt="X-logo" className='w-6' />
          <img src="https://www.svgrepo.com/show/183606/youtube.svg" alt="Youtube" className='w-6' />
        </div>
      </div>

      {/* Column 2 */}
      <div className="md:col-span-2 lg:col-span-1">
        <h1 className='text-xl font-bold mb-4 md:mt-0'>Heading1</h1>
        <p className='mt-2'>Subheading1</p>
        <p className='mt-2'>Subheading2</p>
        <p className='mt-2'>Subheading3</p>
        <p className='mt-2'>Subheading4</p>
      </div>

      {/* Column 3 */}
      <div className="md:col-span-2 lg:col-span-1">
        <h1 className='text-xl font-bold mb-4 md:mt-0'>Heading1</h1>
        <p className='mt-2'>Subheading1</p>
        <p className='mt-2'>Subheading2</p>
        <p className='mt-2'>Subheading3</p>
        <p className='mt-2'>Subheading4</p>
      </div>

      {/* Column 4 */}
      <div className="md:col-span-2 lg:col-span-1">
        <h1 className='text-xl font-bold mb-4 md:mt-0'>Heading1</h1>
        <p className='mt-2'>Subheading1</p>
        <p className='mt-2'>Subheading2</p>
        <p className='mt-2'>Subheading3</p>
        <p className='mt-2'>Subheading4</p>
      </div>

    </div>
  );
};

export default Footer;
