"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Max2 from '../../image/image 2.png';
import Main from '../../image/20542.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Register by',
      titleClass: 'text-[#0481EC]',
      content: (
        <div className="flex gap-1 items-center">
          <div>
            <Image
              src={Max2.src}
              alt="Max profile"
              width={50}
              height={70}
              priority
            />
          </div>
          <div>
            <p className="font-bold text-xs md:text-[14px]">Corporate Affairs</p>
            <p className="font-bold text-xs md:text-[14px]">Commission, Nigeria.</p>
          </div>
        </div>
      )
    },
    {
      title: 'Member',
      titleClass: 'text-[#0481EC]',
      content: (
        <div>
          <p className="font-bold text-xs md:text-[14px]">ITPA (Information Technology</p>
          <p className="font-bold text-xs md:text-[14px]">Professionals Association)</p>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10">
      <div className="px-4 py-6 md:p-8 lg:p-16 xl:p-36 p-38 flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="flex flex-col">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-[35px] tracking-wide md:tracking-[5px] w-full md:w-[90%] lg:w-[70%]">
                Let&apos;s Create
              </h1>
              <p className="font-bold text-3xl md:text-4xl lg:text-[45px] tracking-wide md:tracking-[10px] text-[#0481EC]">
                Memorable
              </p>
              <p className="font-bold text-3xl md:text-4xl lg:text-[45px] tracking-wide md:tracking-[10px] text-[#0481EC]">
                Experiences
              </p>
            </span>

            <span className="flex flex-col gap-3 md:gap-5">
              <p className="text-sm md:text-[15px]">
                Welcome to 1691 tech solution where you can get all most service and also get affodable gadget..
              </p>
              <a
                href="/Aboutus"
                className="p-2 bg-[#0481EC] text-[#E9E9E9] rounded-[15px] font-mono text-center w-full max-w-xs md:max-w-[15vw] lg:max-w-[10vw]"
              >
                Learn More
              </a>
            </span>
          </div>

          {/* Slider Component */}
          <div className="relative h-24 mt-4 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <h1 className={`font-bold text-base md:text-[17px] ${slide.titleClass}`}>
                    {slide.title}
                  </h1>
                  {slide.content}
                </div>
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-0 left-0 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-[#0481EC]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src={Main.src}
            alt="Main profile"
            width={800}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;