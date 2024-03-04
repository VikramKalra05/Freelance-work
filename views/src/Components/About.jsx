import React from 'react'

const About = () => {
  return (
    <div>
        <div className='h-[50vh] flex-col items-center justify-center'>
            <h1 className='text-5xl font-semibold text-center mt-20'>About us</h1>
            <p className='text-xl font-thin text-center mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt, facilis reprehenderit culpa placeat dolorum accusamus? Quod, officia labore alias mollitia cupiditate accusamus delectus, obcaecati maxime, fugit laboriosam amet enim.</p>
        <div className='flex justify-center mt-6'>
        <button className='bg-black text-white rounded-3xl py-2 px-6'>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default About