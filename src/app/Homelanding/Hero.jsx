'use client'
import React from 'react';
import Image from 'next/image';
import Main from '../../image/20542.jpg';

const Hero = () => {
  return (
    <div className="container mx-auto mt-[10vw] px-4 py-10 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
   
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-[22px] md:text-[22px] lg:text-text-[22px] font-bold tracking-wide">
                Let's Create
              </h1>
              <h2 className="text-3xl sm:text-[22px] md:text-[22px] lg:text-text-[22px] font-bold text-[#0481EC] tracking-wider">
                Memorable
              </h2>
              <h2 className="text-3xl sm:text-[22px] md:text-[22px] lg:text-text-[22px] font-bold text-[#0481EC] tracking-wider">
                Experiences
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 max-w-prose">
              Welcome to 1691 Tech Solution, where you can get almost every service and also find affordable gadgets.
            </p>
          </div>

          <div>
            <a 
              href="/Aboutus" 
              className="inline-block px-6 py-3 bg-[#0481EC] text-white 
              rounded-xl hover:bg-[#0462c0] transition-colors 
              text-base sm:text-lg font-medium 
              w-full sm:w-auto text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src={Main.src}
            alt="1691 Tech Solution Hero Image"
            width={900}
            height={1100}
            priority
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;