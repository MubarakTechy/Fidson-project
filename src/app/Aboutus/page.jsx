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
        <div className='p-20  max-sm:flex-col max-lg:flex-col-reverse flex justify-center flex-col items-center'>
           <h1 className='font-bold text-[#0481EC] max-sm:text-[25px] text-[37px] '>We&apos;re glad you are here</h1>
            <div className='flex max-sm:flex-col  items-center p-5 gap-5 game'>
            <div className='flex  max-sm:flex-col flex-col gap-2'>
                <h1 className='max-sm:w-[75vw] font-bold text-[30px] max-lg:w-[80vw] w-[30vw]'>About 1691 Tech Solution</h1>
                <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[40vw]'>
                    1691 Tech Solution is a leading ICT company specializing in laptop sales, customization, maintenance, diagnosis, and repair. We also offer top-notch data recovery services to ensure your valuable information remains secure.
                </h1>
                <h1 className='max-sm:w-[75vw] text-[15px] leading-7 max-lg:w-[80vw] w-[40vw]'>
                    At 1691 Tech Solution, we recover data from faulty storage devices and electronic gadgets with precision and expertise. Additionally, we provide internship opportunities to empower aspiring tech professionals with hands-on experience.
                </h1>
            </div>
              <div >
                <Image
                    className=' w-[35vw] max-sm:w-[50vw]'
                    src={Max2.src}
                    alt="Max profile"
                    width={500}  
                    height={700} 
                    priority />
              </div>
            </div>
            <div className='max-sm:flex-col '>
                <div className='flex gap-5 max-sm:flex-col  items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='max-sm:w-[75vw] font-bold text-[35px] max-lg:w-[80vw]  '>Company&apos;s Aim</h1>
                        <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7  w-[40vw]'>Technologica della fidato! Our Aim is to create a trusting and long lasting relationship with our customers. We hope to achieve this by providing our customers with the best products that fit their needs at very friendly prices. We hope to see you as part of our future as we grow together.</h1>
                    </div>
                    <div>
                        <Image
                        className=' w-[45vw] max-sm:w-[50vw]'
                        src={Max3.src}
                        alt="Max profile"  width={500} height={700} priority />
                    </div>
                </div>
                <div className='flex max-sm:flex-col  flex-col gap-7'>
                        <span>
                            <h1 className='max-sm:w-[75vw] font-bold text-[30px] max-lg:w-[80vw]'>
                                Corporate Social Responsibility (CSR):
                            </h1>
                        </span>
                        <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[50vw]'>
                            As part of our CSR, we are committed to educating, encouraging, and motivating young students in secondary schools to acquire legitimate IT skills that will benefit them throughout their lives.
                        </h1>
                        
                    <div className='flex flex-col gap-3'>
                        <h1 className='max-sm:w-[75vw] font-bold text-[30px]'> History: </h1>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[50vw]'>
                            1691 Tech Solution was founded with a vision to provide trusted and innovative IT services. Over the years, we have expanded our expertise in laptop sales, customization, maintenance, diagnosis, and repair while staying committed to industry advancements.
                        </p>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[50vw]'>
                            Our journey has been fueled by continuous learning, market research, and technical training to ensure we deliver top-tier solutions to our valued clients.
                        </p>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[50vw]'>
                            With over a decade of experience, numerous certifications, and an unwavering dedication to excellence, we remain committed to offering the best IT solutions to our esteemed customers.
                        </p>
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