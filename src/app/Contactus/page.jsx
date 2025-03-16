"use client"
import React,  { useState } from 'react'
import Navbar from '../../component/Navbar';
import { FaPhone } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import Footer from '../../component/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const page = () => {
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [message, setMessage] = useState('')
    const [sending, setSending ] = useState (false)

    async function  fetchApi(e){
        e.preventDefault()
        setSending(true)
        try {
           const baseurl ='https://forms-io.onrender.com/submit-form/3e549760-198b-4c3d-992f-f5c4fe837838'
           const response  = await fetch (baseurl,{
              method:'POST',
              headers: {'Content-type' : 'application/json'},
              body : JSON.stringify({name, telephone, message})    
           }); 
           const resData = await response.json();           
            setSending(false)
            toast.success('Sucessful sent!!!')    
            console.log("data ", resData) 
        } catch (error) {
            setSending(false)
            toast.error ('unable to send please check your internet ');
            console.log(error)
        }

    }

  return (
    <>
        <Navbar />
       <form  onSubmit={fetchApi}  method="post">
            <div className='flex flex-col items-center justify-center gap-2 p-20 create' >
                    <h1 className='font-bold text-[35px] text-[#0481EC] '>Reach out to us</h1>
                    <div className='flex flex-col gap-3'>
                        <p  className=' text-[15px]'>You can reach out to us through email</p>
                       <div className='flex flex-col gap-5'>
                            <span className='flex flex-col gap-1'>
                                <h1 className='font-bold'>Name</h1>
                                <input onChange={(e)=> setName(e.target.value)} name='name' value={name}  className='w-[45vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none rounded-[5px]  hover:border-b' type="text" />
                            </span>
                            <span  className='flex flex-col gap-2'>
                                <h1 onChange={(e)=> setTelephone(e.target.value)} name='telephone' value={telephone} className=' font-bold'>Telephone</h1>
                                <input className='w-[45vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none  rounded-[5px]  hover:border-b ' type="number"/>
                            </span>
                            <div className='flex flex-col gap-4 text-end p-2 '>
                                <textarea onChange={(e)=> setMessage(e.target.value)} name='message' value={message}  className=' font-mono  max-lg:w-[80vw] max-sm:w-[90vw]  w-[45vw] bg-[#EFEFEF] rounded-[5px]  text-[black] p-3  h-[30vh]  border-1 ' placeholder='Please type your massage'  id=""></textarea>
                                <button  className='p-2 bg-[#0481EC] text-[#E9E9E9] rounded-[15px] font-mono max-sm:w-[25vw]  max-lg:w-[30vw]    w-[10vw] '>{sending ? 'sending...' : 'Send' }</button>
                            </div>
                           <ToastContainer />
                       </div>
                        
                        <div className='flex flex-col justify-center items-center gap-2 p-20 '>
                            <h1 className='font-bold text-[#0481EC] text-[40px] ' >Support</h1>
                            <div className='flex items-center gap-2  '>
                               <span className='flex items-center gap-1 '>
                                    <FaPhone className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>+2348061622596</h1>
                                </span>
                                <span className='flex items-center gap-1 '>
                                    <FaInstagramSquare className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>info@1691techsolution.com</h1>
                                </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='flex items-center  gap-1'>
                                    <FaTwitter className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>@1691techsolution</h1>
                                </span>
                                <span className='flex items-center gap-1 '>
                                    <MdEmail className='text-[#0481EC]' size={20} /> 
                                    <h1 className='font-mono  text-[17px]'>info@1691techsolution.com</h1>
                                </span>
                            </div>
                            <span className='flex items-center gap-2'>
                                <FaSquareFacebook  className='text-[#0481EC]' size={20} />
                                <a href='https://www.facebook.com/1691techsolution'  className='font-mono  text-[17px]'>https://www.facebook.com/1691techsolution</a>
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