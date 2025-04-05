"use client"
import React, { useState, useEffect } from 'react'
import Navbar from '../../component/Navbar';
import { FaLocationDot } from "react-icons/fa6";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../../component/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [message, setMessage] = useState('')
    const [company, setCompany] = useState('')
    const [sending, setSending] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Set visibility after component mounts to trigger animations
        setIsVisible(true)
    }, [])

    async function fetchApi(e) {
        e.preventDefault()
        
        // Form validation
        if (!name || !email || !telephone || !message) {
            toast.error('Please fill all required fields');
            return;
        }
        
        setSending(true)
        try {
            const baseurl = 'https://forms-io.onrender.com/submit-form/3e549760-198b-4c3d-992f-f5c4fe837838'
            const response = await fetch(baseurl, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ name, email, telephone, message, company })
            });
            const resData = await response.json();
            setSending(false)
            toast.success('Successfully sent!')
            
        
            setName('');
            setEmail('');
            setTelephone('');
            setMessage('');
            setCompany('');
            
            console.log("data ", resData)
        } catch (error) {
            setSending(false)
            toast.error('Unable to send. Please check your internet connection.');
            console.log(error)
        }
    }


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const formItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <>
            <Navbar />
            <div className='py-12 px-4 md:px-8 lg:p-16 xl:p-20 flex items-center justify-center'>
                <motion.div 
                    className='bg-[#2256D4] rounded-lg shadow-xl w-full max-w-6xl overflow-hidden'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    <div className='flex flex-col md:flex-row p-6 md:p-10 gap-8'>
                       
                        <motion.div 
                            className="flex flex-col gap-7 w-full md:w-1/2"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}>
                            <motion.h1 variants={itemVariants} className='text-2xl md:text-3xl text-white font-bold'>
                                Contact 
                            </motion.h1>
                            <motion.div variants={itemVariants} className="border-t border-white mb-4"></motion.div>
                            
                            <motion.div 
                                variants={itemVariants}
                                className='flex gap-4 items-center group'
                                whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                                <div className='h-12 w-12 md:h-14 md:w-14 bg-white p-2 rounded-lg flex items-center justify-center shadow-md'>
                                    <FaLocationDot className='text-[#2256D4] text-xl md:text-2xl transition-transform group-hover:scale-110' />
                                </div>
                                <div>
                                    <h1 className='text-lg md:text-xl text-white font-bold'>Address</h1>
                                    <h1 className='text-sm md:text-base text-white opacity-90'>No. 11, Francis Oremeji Street, directly beside UBA bank, computer village, Ikeja Lagos.</h1>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className='flex items-center gap-4 group'
                                whileHover={{ x: 10, transition: { duration: 0.2 } }} >
                                <div className='h-12 w-12 md:h-14 md:w-14 bg-white p-2 rounded-lg flex items-center justify-center shadow-md'>
                                    <MdPhonelinkRing className='text-[#2256D4] text-xl md:text-2xl transition-transform group-hover:scale-110' />
                                </div>
                                <div>
                                    <h1 className='text-lg md:text-xl text-white font-bold'>Contact Number</h1>
                                    <h1 className='text-sm md:text-base text-white opacity-90'>+234 806 162 2596</h1>
                                </div>
                            </motion.div>

                            <motion.div 
                                variants={itemVariants}
                                className='flex items-center gap-4 group'
                                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                            >
                                <div className='h-12 w-12 md:h-14 md:w-14 bg-white p-2 rounded-lg flex items-center justify-center shadow-md'>
                                    <MdOutlineMailOutline className='text-[#2256D4] text-xl md:text-2xl transition-transform group-hover:scale-110' />
                                </div>
                                <div>
                                    <h1 className='text-lg md:text-xl text-white font-bold'>Email Us</h1>
                                    <h1 className='text-sm md:text-base text-white opacity-90'>info@1691techsolution.com</h1>
                                </div>
                            </motion.div>
                        </motion.div>

                 
                        <motion.div 
                            className='w-full md:w-1/2'
                            variants={containerVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                        >
                            <form onSubmit={fetchApi} method="post" className='w-full'>
                                <div className='flex flex-col gap-4 w-full'>
                                    <motion.div variants={formItemVariants} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                        <input 
                                            placeholder='Name ' 
                                            onChange={(e)=> setName(e.target.value)} 
                                            name='name' 
                                            value={name}  
                                            className='w-full bg-white bg-opacity-90 p-3 border-l-4 border-l-[#2256D4] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2256D4] transition-all duration-300' 
                                            type="text"
                                            required />
                                        <input 
                                            placeholder='Telephone ' 
                                            onChange={(e)=> setTelephone(e.target.value)} 
                                            name='telephone' 
                                            value={telephone} 
                                            className='w-full bg-white bg-opacity-90 p-3 border-l-4 border-l-[#2256D4] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2256D4] transition-all duration-300' 
                                            type="tel"
                                            required
                                        />
                                    </motion.div>
                                    
                                    <motion.div variants={formItemVariants} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                        <input 
                                            placeholder='Email ' 
                                            onChange={(e)=> setEmail(e.target.value)} 
                                            name='email' 
                                            value={email}  
                                            className='w-full bg-white bg-opacity-90 p-3 border-l-4 border-l-[#2256D4] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2256D4] transition-all duration-300' 
                                            type="email"
                                            required/>
                                        <input 
                                            placeholder='Company' 
                                            onChange={(e)=> setCompany(e.target.value)} 
                                            name='company' 
                                            value={company}  
                                            className='w-full bg-white bg-opacity-90 p-3 border-l-4 border-l-[#2256D4] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2256D4] transition-all duration-300' 
                                            type="text" />
                                    </motion.div>
                                    
                                    <motion.div variants={formItemVariants} className='w-full'>
                                        <textarea 
                                            onChange={(e)=> setMessage(e.target.value)} 
                                            name='message' 
                                            value={message}  
                                            className='w-full bg-white bg-opacity-90 rounded-md text-gray-800 p-4 h-32 border-l-4 border-l-[#2256D4] shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2256D4] transition-all duration-300' 
                                            placeholder='Please type your message '
                                            required
                                        ></textarea>
                                    </motion.div>
                                    
                                    <motion.div 
                                        variants={formItemVariants}
                                        className='flex justify-center md:justify-end mt-2'
                                    >
                                        <motion.button 
                                            className='px-8 py-3 text-white bg-[#0481EC] hover:bg-[#0360b1] rounded-full font-medium text-base shadow-lg transition-all duration-300 flex items-center justify-center min-w-32'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={sending}
                                        >
                                            {sending ? 
                                                <span className="flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span> 
                                                : 'Send Message'
                                            }
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            <ToastContainer position="bottom-right" autoClose={3000} />
            <Footer />
        </>
    )
}

export default Page;