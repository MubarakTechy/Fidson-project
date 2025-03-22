
"use client"
import React, { useState }  from 'react'
import Navbar from '../../component/Navbar';
import { FaLocationDot } from "react-icons/fa6";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../../component/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const page = () => {
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [telephone, setTelephone] = useState('')
        const [message, setMessage] = useState('')
        const [company, setCompany] = useState('')
        const [sending, setSending ] = useState (false)
        
    
        async function  fetchApi(e){
            e.preventDefault()
            setSending(true)
            try {
               const baseurl ='https://forms-io.onrender.com/submit-form/3e549760-198b-4c3d-992f-f5c4fe837838'
               const response  = await fetch (baseurl,{
                  method:'POST',
                  headers: {'Content-type' : 'application/json'},
                  body : JSON.stringify({name, email,  telephone, message})    
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
       <div className='p-28  flex items-center flex-col  '>
           <div className='bg-[#2256D4] gap-5 flex items-start justify-center p-14'>
                <div className=" flex flex-col gap-7">
                    <h1 className='text-[30px] text-[white] font-bold items-center gap-2 '>Contact Informatlon</h1>
                    <div className="border-t border-white mb-6"></div>
                    <div className='flex gap-2 items-center '>
                        <div className=' h-[8vh] bg-white p-2 w-[3vw] '><FaLocationDot  className='text-[#2256D4]'   size={30} /></div>
                        <div>
                            <h1 className='text-[20px] text-[white]  font-bold'>Address</h1>
                            <h1 className='text-[15px]  text-[white]  '> No. 3, Sokoto Road, Sabo-Oke, Ilorin</h1>
                        </div>
                    </div>

                    <div className='flex  items-center gap-2'>
                        <div className=' h-[8vh] bg-white p-2 w-[3vw] '><MdPhonelinkRing  className='text-[#2256D4]' size={30} /></div>
                        <div>
                            <h1 className='text-[20px] text-[white] font-bold  '>Contact Number</h1>
                            <h1 className='text-[15px] text-[white]  '>+234 806 162 2596</h1>
                        </div>
                    </div>

                    <div className='flex  items-center gap-2'>
                        <div className=' h-[8vh] bg-white p-2 w-[3vw] ' ><MdOutlineMailOutline className='text-[#2256D4]'  size={30} /></div>
                        <div>
                            <h1 className='text-[20px] text-[white]  font-bold  '>Email Us</h1>
                            <h1 className='text-[15px] text-[white]  '>info@1691techsolution.com</h1>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col items-start gap-2'>
                    <form onSubmit={fetchApi}  method="post">
                        <div className='flex flex-col items-start gap-3 '>
                            <h1 className='text-[30px] text-[white] font-bold items-center gap-2 '>Get A Quote</h1>
                            <div className="border-t border-white mb-6"></div>
                            <div className='flex  items-center gap-2'>
                                <input placeholder='Name'  place onChange={(e)=> setName(e.target.value)} name='name' value={name}  className='w-[20vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none rounded-[5px]  hover:border-b' type="text" />
                                <input placeholder='Telephone'  onChange={(e)=> setTelephone(e.target.value)} name='telephone' value={telephone} className='w-[20vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none  rounded-[5px]  hover:border-b ' type="number"/>
                            </div>
                            <div className='flex  items-center gap-2'>
                                <input placeholder='Email'  onChange={(e)=> setEmail(e.target.value)} name='email' value={email}  className='w-[20vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none  rounded-[5px]  hover:border-b ' type="email"/>
                                <input placeholder='Company'  onChange={(e)=> setCompany(e.target.value)} name='company' value={company}  className='w-[20vw]  max-lg:w-[80vw] max-sm:w-[90vw] bg-[#EFEFEF] p-3  border-none  rounded-[5px]  hover:border-b ' type="text"/>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                                <textarea onChange={(e)=> setMessage(e.target.value)} name='message' value={message}  className=' font-mono  max-lg:w-[80vw] max-sm:w-[90vw]  w-[41vw] bg-[#EFEFEF] rounded-[5px]  text-[black] p-3  h-[20vh]   ' placeholder='Please type your massage'  id=""></textarea>
                                <button  className='p-2 text-[#0481EC] bg-[#E9E9E9] rounded-[15px] font-mono max-sm:w-[25vw]  max-lg:w-[30vw]    w-[10vw] '>{sending ? 'sending...' : 'Send' }</button>
                            </div>
                            <ToastContainer />
                        </div>
                    </form>
              </div>
           </div>


          
       </div> 
       <Footer/>
    </>
  )
}





export default page