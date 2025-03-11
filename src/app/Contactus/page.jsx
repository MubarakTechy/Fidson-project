import React from 'react'
import Navbar from '../../component/Navbar';
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import Footer from '../../component/Footer';


const page = () => {
  return (
    <>
        <Navbar />
       <form action="" method="post">
            <div className='flex flex-col items-center justify-center gap-2 p-20 create' >
                    <h1 className='font-bold text-[35px] text-[#0481EC] '>Reach out to us</h1>
                    <div className='flex flex-col gap-3'>
                        <p  className=' text-[15px]'>You can reach out to us through email</p>
                        <span className='flex flex-col gap-1'>
                            <h1 className='font-bold'>Name</h1>
                            <input className='w-[45vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none text-white  rounded-[5px]  hover:border-b' type="text" />
                        </span>
                        <span  className='flex flex-col gap-1'>
                            <h1 className=' font-bold'>Telephone</h1>
                            <input className='w-[45vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3 make border-none text-white  rounded-[5px]  hover:border-b ' type="number"/>
                        </span>
                        <div className='flex flex-col gap-4 text-end '>
                            <textarea className=' font-mono  max-lg:w-[80vw] max-sm:w-[90vw]  w-[45vw] bg-[#EFEFEF] rounded-[5px]  text-[grey] p-3  h-[30vh]  border-1 ' placeholder='Please type your massage' name="" id=""></textarea>
                            <button  className='p-2 bg-[#0481EC] text-[#E9E9E9] rounded-[15px] font-mono max-sm:w-[25vw]  max-lg:w-[30vw]    w-[10vw] '>Send </button>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 p-20 '>
                            <h1 className='font-bold text-[#0481EC] text-[40px] ' >Support</h1>
                            <div className='flex items-center gap-2  '>
                               <span className='flex items-center gap-1 '>
                                    <FaPhone className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>+234 813 943 7666 </h1>
                                </span>
                                <span className='flex items-center gap-1 '>
                                    <FaInstagramSquare className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>@fidsontechnologies</h1>
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='flex items-center  gap-1'>
                                    <FaTwitter className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>@FidsonTech</h1>
                                </span>
                                <span className='flex items-center gap-1 '>
                                    <MdEmail className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>fidsontechnologies@gmail.com</h1>
                                </span>
                            </div>
                            <span className='flex items-center gap-2'>
                                <FaSquareFacebook  className='text-[#0481EC]' size={20} />
                                <a href='https://www.facebook.com/FidsonTechnologies'  className='font-mono  text-[17px]'>https://www.facebook.com/FidsonTechnologies</a>
                            </span>
                        </div>
                    </div>
            </div>
       </form>
       <Footer/>
    </>
  )
}

export default page