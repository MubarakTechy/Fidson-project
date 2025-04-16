'use client';
import React from 'react';
import Image from 'next/image';
import Main from '../../image/TTI.jpg';
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
    <div className="container mind mx-auto mt-[10vw] px-4 py-10 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-[45px] sm:text-[35px] md:text-[35px] lg:text-5xl font-bold tracking-wide">
                Let's Create
              </h1>
              <h2 className="text-[45px] sm:text-[35px] md:text-[35px] lg:text-6xl font-bold text-[#0481EC] tracking-wider">
                Memorable
              </h2>
              <h2 className="text-[45px] sm:text-[35px] md:text-[35px] lg:text-6xl font-bold text-[#0481EC] tracking-wider">
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
            className="w-full max-w-md object-cover rounded-lg"
          />
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
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
               
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-[#0481EC]">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Main from '../../image/TTI.jpg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';

// // Sample data for services/products
// const products = [
//   {
//     title: 'Web Development',
//     desc: 'Modern, responsive websites built to impress.',
//   },
//   {
//     title: 'Phone Accessories',
//     desc: 'Affordable, quality gadgets and accessories.',
//   },
//   {
//     title: 'Graphics Design',
//     desc: 'Creative visuals that speak your brand.',
//   },
//   {
//     title: 'IT Consultancy',
//     desc: 'Professional advice for digital growth.',
//   },
// ];

// const Hero = () => {
//   const [showCAC, setShowCAC] = useState(true);
  
//   // Toggle between CAC and ITT images
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowCAC(prev => !prev);
//     }, 4000); // Switch every 4 seconds
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto mt-20 px-4 py-10 md:py-16 lg:py-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
//         {/* Text Content */}
//         <div className="order-2 md:order-1 space-y-6">
//           <div className="space-y-4">
//             <div className="space-y-2">
//               <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
//                 Let's Create
//               </h1>
//               <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-500 tracking-wider">
//                 Memorable
//               </h2>
//               <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-500 tracking-wider">
//                 Experiences
//               </h2>
//             </div>
            
//             <p className="text-base sm:text-lg text-gray-700 max-w-prose">
//               Welcome to 1691 Tech Solution, where you can get almost every service and also find affordable gadgets.
//             </p>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4">
//
//               Learn More
//             </a>
            
//             {/* Image-only transition */}
//             <div className="flex items-center">
//               {/* Image container with transition */}
//               <div className="h-16 w-16 relative mr-3">
//                 {/* CAC Image */}
//                 <div 
//                   className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                     showCAC ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <Image
//                     src="/CAC.png"
//                     alt="CAC Registration Certificate"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
                
//                 {/* ITT Image */}
//                 <div 
//                   className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//                     !showCAC ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 >
//                   <Image
//                     src={Main.src}
//                     alt="ITT Membership Certificate"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
              
//               {/* Static text showing both certifications */}
//               <span className="text-sm font-medium text-gray-700">
//                 CAC Registered & ITT Member
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* Image Section */}
//         <div className="order-1 md:order-2 flex justify-center md:justify-end">
//           <Image
//             src={Main.src}
//             alt="1691 Tech Solution Hero Image"
//             width={900}
//             height={1100}
//             priority
//             className="w-full max-w-md object-cover rounded-lg"
//           />
//         </div>
//       </div>
      
//       {/* Products/Services Slider */}
//       <div className="mt-16">
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 3000 }}
//           slidesPerView={1}
//           spaceBetween={20}
//           breakpoints={{
//             640: { slidesPerView: 1.5 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {products.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <div className="p-4">
//                   <h4 className="text-lg font-semibold text-blue-500">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Hero;