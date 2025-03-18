import React from 'react';
import Image from 'next/image';
import Max2 from '../image/1691 Logo.PNG';
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='bg-[#0481EC] p-10 md:p-20 flex flex-col items-center text-center md:text-left'>
      
     
      <div className='mb-5'>
        <Image src={Max2.src} alt="1691 Tech Solution Logo" width={170} height={70} priority />
      </div>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-evenly gap-10'>
        
      
        <div className='flex flex-col items-center md:items-start gap-3'>
          <h2 className='font-bold text-white text-[18px]'>Links</h2>
          <h2 className='font-mono text-white text-[15px]'>Buy Laptop</h2>
          <h2 className='font-mono text-white text-[15px]'>Laptop Repair</h2>
          <h2 className='font-mono text-white text-[15px]'>Laptop Accessories / Laptop Diagnosis</h2>
                    
         
        </div>

      
        <div className='flex flex-col items-center md:items-start gap-3'>
          <h2 className='font-bold text-white text-[18px]'>For Clients</h2>
          <h2 className='font-mono text-white text-[15px]'>Testimonies</h2>
          <h2 className='font-mono text-white text-[15px]'>< a href="/Faq" >Faq</a></h2>
        </div>

        <div className='flex flex-col items-center md:items-start gap-3'>
            <h2 className='font-bold text-white text-[18px]'>Support</h2>
            <span className='flex items-center gap-2'>
               <FaPhone className='text-white' size={20} />
               <h1 className='font-mono text-white text-[15px]'>+234 813 943 7666</h1>
            </span>
            <span className='flex items-center gap-2'>
               <FaInstagramSquare className='text-white' size={20} />
               <h1 className='font-mono text-white text-[15px]'>@1691techsolution</h1>
            </span>
            <span className='flex items-center gap-2'>
               <FaTwitter className='text-white' size={20} />
               <h1 className='font-mono text-white text-[15px]'>@1691Tech</h1>
            </span>
            <span className='flex items-center gap-2'>
               <MdEmail className='text-white' size={20} />
               <h1 className='font-mono text-white text-[15px]'>support@1691tech.com</h1>
            </span>
        </div>
      </div>

     
      <div className='mt-10 w-full flex flex-col md:flex-row items-center justify-between text-center md:text-left'>
        
        <h1 className='font-bold text-white text-[15px] mb-4 md:mb-0'>
          ©2025 1691 Tech Solution. All rights reserved.
        </h1>
        <button className='bg-white hover:bg-[#0469c1] text-[#0481EC] hover:text-white font-bold p-2 w-full sm:w-[50%] md:w-[10vw] rounded-[15px] transition'>
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Footer;
