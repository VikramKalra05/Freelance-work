import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import './Carousel.css';

function Carousel() {
    const slides = [
        {
            url: 'https://t4.ftcdn.net/jpg/03/26/12/23/360_F_326122335_RKvTXMb4RYkIzk94ZoPjkZQe2CUOVnen.jpg'
        },
        {
            url: 'https://t4.ftcdn.net/jpg/02/34/63/07/360_F_234630793_eHKQucxaXftnWrecTJFITmD4cr3TlUgG.jpg'
        },
        {
            url: 'https://t4.ftcdn.net/jpg/07/37/31/97/360_F_737319799_VS5b3CQ35rvsMoCkPLKXWt5MVezbJoUO.jpg'
        },
        {
            url: 'https://t3.ftcdn.net/jpg/02/12/53/72/360_F_212537249_dncXoI9vxUZPzNoVlvR3hSsMMfBy7jCb.jpg'
        },
        {
            url: 'https://content.wepik.com/statics/11430404/preview-page0.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(nextIndex);
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, slides.length]);

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const handleSlideClick = () => {

        console.log('Slide clicked:', currentIndex);
    };

    return (
        <div className='flex'>
            
            <div className=' h-[45vh] md:h-[90vh] p-0 relative mt-0 pt-0 group z-0 md:w-[100%] bg-black w-screen' onClick={handleSlideClick}>
                <div
                    style={{
                        backgroundImage: `url(${slides[currentIndex].url})`,
                        transition: 'background-image 0.5s ease-in-out',
                    }}
                    className='w-[100%] h-full bg-center bg-cover overflow-hidden carousel-image'
                ></div>
                <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black bg-opacity-[50%] p-2 text-white cursor-pointer'>
                    <FaAngleLeft onClick={prevSlide} size={30} />
                </div>
                <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-opacity-[50%] bg-black  p-2 text-white cursor-pointer'>
                    <FaAngleRight onClick={nextSlide} size={30} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
