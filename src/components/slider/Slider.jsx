import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'
import styles from './slider.module.css'
export default function Slider() {

    const sliderImages = ['/assets/gucci.jpg', '/assets/gucci1.webp', '/assets/gucci2.webp', '/assets/gucci3.webp']
    let count = 0;
    let slideInterval;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % sliderImages.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = sliderImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <div ref={slideRef} className="w-full select-none relative bg-center">
            <div className="aspect-w-16 aspect-h-9">
                <img className='w-full h-[500px] object-cover' src={sliderImages[currentIndex]} alt="" />
            </div>

            <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnPrevClick}
                >
                    <AiOutlineVerticalRight size={30} />
                </button>
                <button
                    className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={handleOnNextClick}
                >
                    <AiOutlineVerticalLeft size={30} />
                </button>
            </div>
        </div>
    )
}
