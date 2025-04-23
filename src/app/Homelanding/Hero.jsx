'use client';
import React from 'react';
import Image from 'next/image';
import Main from '../../image/tech.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Sample data for services/products
const products = [
  {


    title: 'Web Development',
    desc: 'Modern, responsive websites built to impress.',
  },

  {
    title: 'Phone Accessories',
    desc: 'Affordable, quality gadgets and accessories.',

  },
  {
    title: 'Graphics Design',
    desc: 'Creative visuals that speak your brand.',

  },
  {
    title: 'IT Consultancy',
    desc: 'Professional advice for digital growth.',

  },
];

const Hero = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
                Let's Create
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0481EC] tracking-wide">
                Memorable
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#0481EC] tracking-wide">
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
          <div className="relative w-full max-w-md md:max-w-full">
            <Image
              src={Main}
              alt="1691 Tech Solution Hero Image"
              width={500}
              height={400}
              priority
              className="rounded-lg object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Products/Services Slider */}
      <div className="mt-16">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="py-4"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#0481EC] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;