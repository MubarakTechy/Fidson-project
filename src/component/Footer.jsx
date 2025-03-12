import React from 'react'
import Image from 'next/image';
import Max2 from '../image/1691 Logo.PNG';
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
     <>
        <div className='bg-[#0481EC] p-20  '>  
        <div>
        <Image
          src={Max2.src}
          alt="Max profile" width={170}  height={70}  priority />
        </div>
        <div className='p-5 flex items-center justify-evenly gap-10'>
             <div className='flex flex-col items-start  gap-5'>
                <h2 className='font-bold  text-white text-[15px]'>Link</h2>
                <h2 className='font-mono  text-white text-[15px]' >Buy Laptop</h2>
                <h2 className='font-mono text-white  text-[15px]' >laptop Repair</h2>
                <h2 className='font-mono text-white  text-[15px]' >Laptop Accessories</h2>
                <h2 className='font-mono  text-white text-[15px]' >Laptop Diagnosis</h2>
             </div>
             <div className='flex flex-col items-start  gap-5'>
                <h2 className='font-bold text-white  text-[15px]'>For Client</h2>
                <h2 className='font-mono text-white  text-[15px]' >Testimonies </h2>
                <h2 className='font-mono text-white  text-[15px]' >Complaints </h2>
             </div>
             <div className='flex flex-col items-start  gap-5'> 
                 <h2 className='font-bold text-white text-[15px]'>Support</h2>
                 <span className='flex items-center gap-1 '>
                    <FaPhone className='text-[white]' size={20} /> 
                    <h1 className='font-mono text-white text-[15px]'>+234 813 943 7666 </h1>
                 </span>
                 <span className='flex items-center gap-1 '>
                    <FaInstagramSquare className='text-[white]' size={20} /> 
                    <h1 className='font-mono text-white text-[15px]'>@fidsontechnologies</h1>
                 </span>
                 <span className='flex items-center  gap-1'>
                    <FaTwitter className='text-[white]' size={20} /> 
                    <h1 className='font-mono text-white text-[15px]'>@FidsonTech</h1>
                 </span>
                 <span className='flex items-center gap-1 '>
                    <MdEmail className='text-[white]' size={20} /> 
                    <h1 className='font-mono text-white text-[15px]'>fidsontechnologies@gmail.com</h1>
                 </span>
             </div>
        </div>
       <div className='p-5 flex justify-between'>
          <h1 className='font-bold text-white  text-[15px]'>Copyrights 2025. All rights reserved</h1>
          <button className=' bg-white hover:bg-[#0481EC] font-bold p-2 w-[10vw] rounded-[15px] '>Back to Top</button>
       </div>

    
    
    </div>
       
    </>
  )
}

export default Footer