'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Max2 from '../../image/Dell La 5320 .jpeg';
import Max3 from '../../image/Dell Latitude 3390 .jpeg';
import Max4 from '../../image/Dell xps 13 9365.jpeg';
import Max5 from '../../image/HP 1040 G7 x360.jpeg';
import Max6 from '../../image/HP 840 G3.jpeg';
import Max7 from '../../image/HP ProBook x360 11G5.jpeg';
import Max8 from '../../image/HP ProBook x360 11G5.jpeg';
import Max9 from '../../image/HP Zbook Firefly G7 .jpeg';
import Max1 from '../../image/Dell 3190 2in1 .jpeg';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Product data array for easy mapping
const products = [
  { 
    id: 1, 
    image: Max2, 
    name: "Dell La 7400 2in1 ", 
    specs: "UHD 512 SSD -16GB ",
    details: " Touchscreen Keyboard light 8th Generation 13.3-inch screen Face recognition Fingerprints scanner @510k🇮🇸",
    available: true 
  },
  { 
    id: 2, 
    image: Max3, 
    name: "Dell Latitude 3390 ", 
    specs: "256 SSD 8gb ram",
    details: "Touch screen Keyboard - light 8th  - Generation 13.6 inches screen Face recognition @320k🇺🇸",
    available: true 
  },
  { 
    id: 3, 
    image: Max4, 
    name: "Dell xps 13 9365 ", 
    specs: "512 SSD 16gb ram ",
    details: " Touchscreen Keyboard light7th Generation Face recognition Fingerprint reader 4k view 🪟 display @550k🇺🇸",
    available: true 
  },
  { 
    id: 4, 
    image: Max5, 
    name: "HP Hewlett 1040 ", 
    specs: "512 SSD -16gb RAM ",
    details: "size Hybrid system Multiple functions Long lasting battery 170k🇺🇸",
    available: true 
  },
  { 
    id: 5, 
    image: Max6, 
    name: "HP 840 G5 ", 
    specs: "G5 256SSD 8GB RAM ",
    details: "CORE I5 7TH GEN KEYBOARD LIGHT @2.60Ghz",
    available: true 
  },
  { 
    id: 6, 
    image: Max7, 
    name: "HP PRO 11 ", 
    specs: "256 SSD 8gb ram ",
    details: "Touchscreen display 7th Generation 11inch size x360 @₦230k🇺🇸",
    available: true 
  },
  { 
    id: 7, 
    image: Max8, 
    name: "HP Zbook Firefly G7", 
    specs: "HD 512 SSD 16gb ram ",
    details: "4 GB dedicated graphic keyboard light 10th Gen 12 logical processor @650k🇺🇸",
    available: true 
  },
  { 
    id: 8, 
    image: Max9, 
    name: "HP Notebook 14 corei3", 
    specs: "10th Gen. 4gig Ram/ 1TB HDD.",
    details: "Intel Core i3 10th Gen processor, 14-inch HD display, Windows 10 Home, 6+ hours battery life",
    available: true 
  },
  { 
    id: 9, 
    image: Max1, 
    name: "Dell 3190 2in1 ", 
    specs: "16gig Ram/ 256gig SSD.",
    details: "Intel Core i7 processor, 15.6-inch Full HD display, Windows 10 Pro, NVIDIA graphics, 8+ hours battery life",
    available: true 
  },
];

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='flex flex-col w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'>
      <div className='w-full h-48 sm:h-56 md:h-64 relative'>
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          style={{ objectFit: 'contain' }}
          priority 
        />
      </div>
      <h2 className='text-lg font-bold mt-4 line-clamp-2'>{product.name}</h2>
      <p className='text-gray-700 text-sm mt-1'>{product.specs}</p>
      
      <div className='flex justify-between items-center mt-3'>
        <span className={`text-sm font-medium ${product.available ? 'text-green-600' : 'text-red-600'}`}>
          {product.available ? 'Available' : 'Out of Stock'}
        </span>
        <button 
          className='flex items-center gap-1 text-sm font-medium text-[#0481EC] cursor-pointer hover:underline'
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? 'Hide Details' : 'View Details'} 
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {showDetails && (
        <div className='mt-4 pt-3 border-t border-gray-200 transition-all duration-300 ease-in-out'> 
          <p className='text-gray-700 text-sm'>{product.details}</p>j
        </div>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col items-center">
          <h1 className='font-bold text-[#0481EC] text-2xl sm:text-3xl md:text-4xl mb-8 text-center'>
            Our Products
          </h1>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className='flex flex-col justify-center items-center gap-4 mt-16 w-full max-w-md'>
            <h2 className='font-bold text-xl sm:text-2xl text-center'>
              Your Preferred specs not here?
            </h2>
            <button className='py-3 px-6 bg-[#0481EC] text-white rounded-lg font-medium w-full sm:max-w-sm hover:bg-[#0369c5] transition-colors duration-300'>
              Click here
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;