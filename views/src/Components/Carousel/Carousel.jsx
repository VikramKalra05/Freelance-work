import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import './Carousel.css';

function Carousel() {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/13442331/pexels-photo-13442331.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            url: 'https://images.pexels.com/photos/712324/pexels-photo-712324.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1661757251071-624639a288a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHJpbmt8ZW58MHwwfDB8fHww'
        },
        {
            url: 'https://images.unsplash.com/photo-1642821369701-c86f8200efec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGVuZXJneSUyMGRyaW5rfGVufDB8MHwwfHx8MA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1649261191609-0fe89fb51286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGVuZXJneSUyMGRyaW5rfGVufDB8MHwwfHx8MA%3D%3D'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(nextIndex);
        }, 5000);
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
        <div className='w-screen h-[90vh] m-auto relative mt-0 pt-0 group z-0' onClick={handleSlideClick}>
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    transition: 'background-image 0.5s ease-in-out',
                }}
                className='w-full h-full bg-center bg-cover carousel-image'
            ></div>
            <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black bg-opacity-[50%] p-2 text-white cursor-pointer'>
                <FaAngleLeft onClick={prevSlide} size={30} />
            </div>
            <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-opacity-[50%] bg-black  p-2 text-white cursor-pointer'>
                <FaAngleRight onClick={nextSlide} size={30} />
            </div>
        </div>
    );
}

export default Carousel;
