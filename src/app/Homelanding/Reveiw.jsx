"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import Max2 from '../../image/image 2.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviewData = [
  {
    src: Max2.src ,
    name: "ToshMoney",
    role: "Software Engineer",
    review:
      "1691 Tech provided an amazing experience! Their solutions are innovative and reliable.",
    rating: 5,
   
    
  },
  {
    src: Max2.src,
    name: "Jane Victory",
    role: "Product Manager",
    review:
      "The team at 1691 Tech is fantastic. They delivered beyond our expectations.",
    rating: 4,
  
  },
  {
    src: Max2.src,
    name: "Taiwo Brown",
    role: "Designer",
    review:
      "Creative and professional—1691 Tech knows how to make tech work for you!",
    rating: 5,

  },
  {
    src: Max2.src,
    name: "Emily White",
    role: "Entrepreneur",
    review:
      "I highly recommend 1691 Tech for anyone looking to scale their business.",
    rating: 4.5,
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#0481EC]">
         REVEIWS
        </h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Enable Swiper features
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide on mobile
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens
            768: { slidesPerView: 2 }, // Medium screens (tablets)
            1024: { slidesPerView: 3 }, // Large screens (desktops)
          }}
          className="mySwiper"
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg h-72 flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                    <Image
                        src={review.image}
                        alt={`${review.name}'s profile`}
                        width={60} 
                        height={60} 
                        priority 
                        // className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                        {review.name}
                        </h3>
                        <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">"{review.review}"</p>
                    <p className="text-yellow-500 text-right">
                    {"★".repeat(Math.floor(review.rating)) +
                        (review.rating % 1 !== 0 ? "☆" : "")}
                    </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;