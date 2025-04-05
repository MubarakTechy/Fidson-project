'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Max2 from '../../image/Mask group (1).png';
import Max3 from '../../image/Mask group (6).png';
import Max4 from '../../image/Mask group (4).png';
import Max5 from '../../image/Mask group (10).png';
import Max6 from '../../image/Mask group (9).png';
import Max7 from '../../image/IMG20220221133209 1.png';
import Max8 from '../../image/Mask group (2).png';
import Max9 from '../../image/Mask group (7).png';
import Max1 from '../../image/Mask group (1).png';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Product data array for easy mapping
const products = [
  { 
    id: 1, 
    image: Max2, 
    name: "Hp Spetre", 
    specs: "8GB SSD/512GB SSD",
    price: "$899",
    details: "Intel Core i5 processor, 13.3-inch Full HD display, Windows 11 Pro, Backlit keyboard, 10+ hours battery life",
    available: true 
  },
  { 
    id: 2, 
    image: Max3, 
    name: "Hp Spetre", 
    specs: "8GB SSD/512GB SSD",
    price: "$999",
    details: "Intel Core i7 processor, 15.6-inch 4K UHD display, Windows 11 Pro, Backlit keyboard, 8+ hours battery life",
    available: true 
  },
  { 
    id: 3, 
    image: Max4, 
    name: "Hp Spetre", 
    specs: "8GB SSD/512GB SSD",
    price: "$849",
    details: "Intel Core i5 processor, 14-inch Full HD display, Windows 11 Home, Backlit keyboard, 12+ hours battery life",
    available: true 
  },
  { 
    id: 4, 
    image: Max5, 
    name: "Hp Spetre", 
    specs: "8GB SSD/512GB SSD",
    price: "$1099",
    details: "Intel Core i7 processor, 13.3-inch Touchscreen display, Windows 11 Pro, Backlit keyboard, 9+ hours battery life",
    available: true 
  },
  { 
    id: 5, 
    image: Max6, 
    name: "HP Elitebook Folio 9480m", 
    specs: "8GB SSD/512GB SSD",
    price: "$799",
    details: "Intel Core i5 processor, 14-inch HD display, Windows 10 Pro, Spill-resistant keyboard, 7+ hours battery life",
    available: true 
  },
  { 
    id: 6, 
    image: Max7, 
    name: "HP Elitebook Folio G1", 
    specs: "8GB SSD/512GB SSD",
    price: "$849",
    details: "Intel Core i5 processor, 12.5-inch Full HD display, Windows 10 Pro, Backlit keyboard, 10+ hours battery life",
    available: true 
  },
  { 
    id: 7, 
    image: Max8, 
    name: "HP 1030 x360", 
    specs: "8gig SSD/512GB SSD",
    price: "$1199",
    details: "Intel Core i7 processor, 13.3-inch Full HD Touchscreen, Windows 11 Pro, Convertible design, 11+ hours battery life",
    available: true 
  },
  { 
    id: 8, 
    image: Max9, 
    name: "HP Notebook 14 corei3", 
    specs: "10th Gen. 4gig Ram/ 1TB HDD.",
    price: "$599",
    details: "Intel Core i3 10th Gen processor, 14-inch HD display, Windows 10 Home, 6+ hours battery life",
    available: true 
  },
  { 
    id: 9, 
    image: Max1, 
    name: "HP Zbook 15U G3", 
    specs: "16gig Ram/ 256gig SSD.",
    price: "$1299",
    details: "Intel Core i7 processor, 15.6-inch Full HD display, Windows 10 Pro, NVIDIA graphics, 8+ hours battery life",
    available: true 
  },
];

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='flex flex-col w-full max-w-xs mx-auto bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'>
      <div className='w-full h-64 relative'>
        <Image 
          src={product.image.src} 
          alt={product.name}
          fill
          style={{ objectFit: 'contain' }}
          priority 
        />
      </div>
      <h1 className='text-[18px] font-bold mt-3'>{product.name}</h1>
      <p className='text-gray-700'>{product.specs}</p>
      
      <div className='flex justify-between items-center mt-2'>
        <h1 className='text-[15px] font-bold'>
          {product.available ? 'Available' : 'Out of Stock'}
        </h1>
        <button 
          className='flex items-center gap-1 text-[15px] font-bold text-[#0481EC] cursor-pointer hover:underline'
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? 'Hide Details' : 'Show Details'} 
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {showDetails && (
        <div className='mt-4 border-t pt-3 transition-all duration-300 ease-in-out'>
          <p className='text-[#0481EC] font-bold text-lg mb-1'>{product.price}</p>
          <p className='text-gray-700 text-sm'>{product.details}</p>
          <button className='mt-4 w-full py-2 bg-[#0481EC] text-white rounded-md hover:bg-[#0369c5] transition-colors duration-300'>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center p-20 create max-sm:p-10 lg:p-[10%]'>
        <h1 className='font-bold text-[#0481EC] text-[28px] md:text-[37px] mb-6 md:mb-10 text-center'>
          Our Products
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className='flex flex-col justify-center items-center gap-5 mt-16'>
          <h1 className='font-bold text-[22px] md:text-[30px] text-center'>
            Your Preferred specs not here?
          </h1>
          <button className='p-3 bg-[#0481EC] text-[#E9E9E9] rounded-[15px] font-mono w-full max-w-xs sm:max-w-sm md:max-w-md hover:bg-[#0369c5] transition-colors duration-300'>
            Click here
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;