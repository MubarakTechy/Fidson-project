"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviewData = [


  {

    role: "COSTOMERS",
    review: "I love the watch ❤️ very perfect Battery life Rocking it non-stop  I appreciate😊",
    rating: 5,


  },
 
  {

    
    role: "COSTOMERS",
    review: "I will rate you 💯 as regards Customer safisfaction and swift response to enquired and delivery.. i Enjoy my Airpods cool sound and noise proof.✌️ ",
    rating: 4,
 
  },
 
 
  {

    role: "COSTOMERS",
    review: " The thress laptop i got are very perfectn and Customer service is applaudable❤️",
    rating: 5,


  },

  
  {
    role: "COSTOMERS",
    review: "I highly recommend 1691 Tech for anyone looking to scale their business.❤️💯",
    rating: 4.5,
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0481EC] mb-2">CUSTOMER REVIEWS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about our services and solutions
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, 

          }}
          className="pb-12"
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col justify-between transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="mb-4">
                  <FaQuoteLeft className="text-[#0481EC] text-2xl mb-2 opacity-50" />
                  <p className="text-gray-700 italic">{review.review}</p>
                </div>
                
                <div>
                  <div className="mt-4">
                   
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  
                  <div className="flex mt-3 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(review.rating) ? "★" : 
                          (i === Math.floor(review.rating) && review.rating % 1 !== 0) ? "★" : "☆"}
                      </span>
                    ))}
                    <span className="ml-1 text-gray-600 text-sm">({review.rating})</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;