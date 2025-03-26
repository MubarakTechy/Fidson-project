"use client"
import React from 'react';
import Image from 'next/image';

import Main from '../../image/20542.jpg';

const Hero = () => {


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