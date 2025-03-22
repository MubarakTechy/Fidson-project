import React from 'react';
import Image from 'next/image';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import RepairIcon1 from '../../image/Mask group (1).png';
import RepairIcon2 from '../../image/Mask group (6).png';
import RepairIcon3 from '../../image/Mask group (4).png';
import RepairIcon4 from '../../image/Mask group (10).png';
import RepairIcon5 from '../../image/Mask group (9).png';
import TechnicianImage from '../../image/IMG20220221133209 1.png';



const repairServices = [
  {
    id: 1,
    image: RepairIcon1,
    name: "Screen Replacement",
    description: "Fix cracked or damaged laptop screens",
  
  },
  {
    id: 2,
    image: RepairIcon2,
    name: "Battery Replacement",
    description: "Extend your laptop's life with a new battery",

  },
  {
    id: 3,
    image: RepairIcon3,
    name: "Keyboard Repair",
    description: "Fix sticky or non-responsive keys",
   
  },
  {
    id: 4,
    image: RepairIcon4,
    name: "Data Recovery",
    description: "Recover lost or damaged files",
  
  },
  {
    id: 5,
    image: RepairIcon5,
    name: "Virus Removal",
    description: "Clean and optimize your system",
   
  },
  {
    id: 6,
    image: TechnicianImage,
    name: "Motherboard Repair",
    description: "Fix complex hardware issues",
   
  },
];

// Benefits of our repair service
const benefits = [
  "Fast 24-48 hour turnaround for most repairs",
  "90-day warranty on all repairs",
  "Free diagnostic assessment",
  "Certified technicians",
  "Genuine replacement parts",
  "Pick-up and delivery options available"
];

const RepairServiceCard = ({ service }) => {
  return (
    <div className='flex flex-col w-full max-w-xs mx-auto bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
      <div className='w-full h-48 relative mb-4'>
        <Image
          src={service.image.src}
          alt={service.name}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <h1 className='text-[20px] font-bold text-[#0481EC]'>{service.name}</h1>
      <p className='text-gray-700 my-2'>{service.description}</p>
      <button className='mt-4 py-2 px-4 bg-[#0481EC] text-white rounded hover:bg-blue-600 transition-colors'>
        Book Repair
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />
      
    
      <div className='bg-gradient-to-r from-blue-50 to-blue-100 py-16'>
        <div className='px-4 md:px-10 lg:px-[20%] max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            <div className='md:w-1/2'>
              <h1 className='font-bold text-[#0481EC] text-[32px] md:text-[42px] leading-tight'>
                Professional Laptop Repair Services
              </h1>
              <p className='text-gray-700 mt-4 text-lg'>
                Fast, reliable, and affordable laptop repairs by certified technicians. We fix all brands and models with a 90-day warranty.
              </p>
              <div className='flex gap-4 mt-8'>
                <button className='py-3 px-6 bg-[#0481EC] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors'>
                  Book Repair
                </button>
                <button className='py-3 px-6 border border-[#0481EC] text-[#0481EC] rounded-lg font-medium hover:bg-blue-50 transition-colors'>
                  Contact Us
                </button>
              </div>
            </div>
            <div className='md:w-1/2 relative h-64 md:h-80 w-full'>
              <Image
                src={TechnicianImage.src}
                alt="Laptop Repair Technician"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
     
      <div className='px-4 py-16 md:px-10 lg:px-[20%] max-w-7xl mx-auto'>
        <h1 className='font-bold text-[#0481EC] text-[28px] md:text-[37px] mb-6 md:mb-10 text-center'>
          Our Repair Services
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
          {repairServices.map((service) => (
            <RepairServiceCard key={service.id} service={service} />
          ))}
        </div>
        
      
        <div className='mt-20'>
          <h2 className='font-bold text-[24px] md:text-[32px] text-center mb-10'>
            Why Choose Our Repair Service?
          </h2>
          
          <div className='bg-blue-50 p-6 rounded-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <div className='text-[#0481EC] flex-shrink-0'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className='text-gray-700 font-medium'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
       
        <div className='flex flex-col justify-center items-center gap-5 mt-16 bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-lg text-white'>
          <h1 className='font-bold text-[22px] md:text-[30px] text-center'>
            Need a specialized repair service?
          </h1>
          <p className='text-center max-w-xl mb-4'>
            We offer custom repair solutions for all laptop brands and models. Contact us for a free consultation.
          </p>
          <button className='p-3 bg-white text-[#0481EC] rounded-lg font-medium w-full max-w-xs sm:max-w-sm hover:bg-gray-100 transition-colors'>
            Contact Our Technicians
          </button>
        </div>
        
      
        <div className='mt-20'>
          <h2 className='font-bold text-[24px] md:text-[32px] text-center mb-10'>
          Our Repair Process
          </h2>
          
          <div className='space-y-4'>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-bold text-lg'>How long does a typical repair take?</h3>
              <p className='mt-2 text-gray-700'>Most standard repairs are completed within 24-48 hours. Complex repairs may take 3-5 business days.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-bold text-lg'>Do you offer warranty on repairs?</h3>
              <p className='mt-2 text-gray-700'>Yes, all our repairs come with a 90-day warranty on parts and labor.</p>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <h3 className='font-bold text-lg'>What brands do you repair?</h3>
              <p className='mt-2 text-gray-700'>We repair all major laptop brands including HP, Dell, Lenovo, Apple, Asus, Acer, Microsoft, Samsung, and more.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Page;