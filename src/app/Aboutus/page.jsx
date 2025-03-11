"use client"
import React from 'react'
import Navbar from '../../component/Navbar';
import Image from 'next/image';
import Max2 from '../../image/Saly-13.png';
import Max3 from '../../image/Saly-16.png';
import { SlPeople } from "react-icons/sl";
import Footer from '../../component/Footer';
import CountUp from 'react-countup';


const page = () => {
  return (
    <>
        <Navbar />
        <div className='p-20 flex justify-center flex-col items-center'>
           <h1 className='font-bold text-[#0481EC] text-[37px] '>We&apos;re glad you are here</h1>
            <div className='flex items-center p-5 gap-5 game'>
                <div className='flex flex-col gap-2'>
                    <h1 className='max-sm:w-[75vw] font-bold text-[30px] max-lg:w-[80vw]  w-[30vw]'>About our Company</h1>
                    <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7  w-[40vw]'>Fidson Technologies is an ICT company that offer amazing deals on services such as Laptop sales, customisation, maintenance, diagnosis and repair, as well as Data Recovery. </h1>
                    <h1 className='max-sm:w-[75vw] text-[15px] leading-7 max-lg:w-[80vw]  w-[40vw]'>At Fidson Technologies, we recover data from the storage devices of faulty laptops and other electronic devices.   We also provide internship opportunities for willing learners.</h1>
                </div>
              <div >
                <Image
                    className=' w-[35vw] max-sm:w-[30vw]'
                    src={Max2.src}
                    alt="Max profile"
                    width={500}  
                    height={700} 
                    priority />
              </div>
            </div>
            <div>
                <div className='flex gap-5 items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='max-sm:w-[75vw] font-bold text-[35px] max-lg:w-[80vw]  '>Company&apos;s Aim</h1>
                        <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7  w-[40vw]'>Technologica della fidato! Our Aim is to create a trusting and long lasting relationship with our customers. We hope to achieve this by providing our customers with the best products that fit their needs at very friendly prices. We hope to see you as part of our future as we grow together.</h1>
                    </div>
                    <Image
                    className=' w-[45vw] max-sm:w-[30vw]'
                    src={Max3.src}
                    alt="Max profile"  width={500} height={700} priority />
                </div>
                <div className='flex flex-col gap-7 '>
                    <span><h1 className='max-sm:w-[75vw] font-bold text-[30px] max-lg:w-[80vw]  '>Cooperate Social Responsibility (CSR): </h1></span>
                    <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw]  leading-7 w-[50vw]'>As part of our CSR, we educate, encourage and motivate young students in Secondary Schools to learn legitimate IT skills that'll be useful for them throughout their journey in life.</h1>
                    <div className='flex flex-col gap-3 '>
                        <h1 className='max-sm:w-[75vw] font-bold text-[30px]'> History: </h1>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw]  leading-7 w-[50vw]'>Fidson Technologies was founded by Adebayo Ahmad Opeyemi in 2012. At the time, he was a student of the Federal University of Technology, Akure (FUTA). Since then, he has gone on to obtain an M.Sc. in Microbiology and Post Graduate Diploma in Education from the University of Ilorin.</p>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7  w-[50vw]'> In a bid to provide trusted Laptop related services, he has embarked on a series of training, research, seminars and market observation while providing excellent services for his customers in the process.</p>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw]  leading-7 w-[50vw]'>After 10 years in this field, with an array of certifications and experiences gathered in the process; we're still in the business of offering the best services to our exteemed customers.</p>
                    </div>
                </div>
               
            </div>
            <div className="w-full max-w-4xl mt-12 mb-8">
                <h1 className='max-sm:w-[75vw] font-bold text-[30px] mb-8'>More About us</h1>
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-50  border-solid border-2 border-sky-500 rounded-lg shadow-sm w-full md:w-5/12">
                        <SlPeople className="text-[#0481EC] text-4xl mb-4" />
                        <h2 className="text-xl font-semibold mb-4">Successful Clients</h2>
                        <div className="text-3xl font-bold text-[#0481EC]">
                            <CountUp 
                                start={0}
                                end={1250}
                                duration={2.5}
                                separator=","
                                prefix=""
                                suffix="+"
                                decimals={0}
                                enableScrollSpy={true}
                                scrollSpyDelay={500}
                            />
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-6 bg-gray-50 border-solid border-2 border-sky-500  rounded-lg shadow-sm w-full md:w-5/12">
                        <SlPeople className="text-[#0481EC] text-4xl mb-4" />
                        <h2 className="text-xl font-semibold mb-4">Client Satisfaction</h2>
                        <div className="text-3xl font-bold text-[#0481EC]">
                            <CountUp 
                                start={0}
                                end={700}
                                duration={2.5}
                                separator=","
                                prefix=""
                                suffix="%"
                                decimals={0}
                                enableScrollSpy={true}
                                scrollSpyDelay={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default page