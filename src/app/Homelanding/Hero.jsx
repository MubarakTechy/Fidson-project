import React from 'react'
import Image from 'next/image';
import Max2 from '../../image/image 2.png';
import Main from '../../image/20542.jpg';

const Hero = () => {
  return (
    <div className='p-20 flex '>

       <div className='flex flex-col '>
          <div className='flex flex-col gap-3'>
             <span className='flex flex-col gap-1'>
                <h1 className='font-bold text-[35px] tracking-[5px] w-[70%]  '>Let&apos;s Create </h1>
                <p className='font-bold text-[45px] tracking-[10px] underline  text-[#0481EC] '>Memorable </p>
                <p className='font-bold text-[45px] tracking-[10px] underline text-[#0481EC] '> Experiences</p>
             </span>
           <span className='flex flex-col gap-2'>
              <p className='max-sm:w-[75vw] text-[15px]  '>Welcome to 1691 tech solution where you can get all most service and also get affodable gadget..</p>
              <button className='p-2 bg-[#0481EC] text-[#E9E9E9] rounded-[15px] font-mono max-sm:w-[25vw]  max-lg:w-[30vw]    w-[10vw]'>Learn More</button>
           </span>
          </div>
          <div className='flex items-center gap-3'>
              <div className='flex justify-center gap-3 items-center'>
                  <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[17px]  text-[#0481EC] '>Register by</h1>
                      <div className='flex gap-1 items-center' >           
                        <div>
                              <Image
                              // className=' w-[35vw] max-sm:w-[30vw]'
                              src={Max2.src}
                              alt="Max profile"
                              width={50}  
                              height={70} 
                              priority />
                          </div>
                             <div>
                              <p className='font-bold text-[14px] '>Corporate Affairs</p>
                              <p className='font-bold text-[14px] '> Commission, Nigeria.</p>
                             </div>
                        </div>
                  </div>
              </div>
              <div  className='flex flex-col gap-1'>
                <h1 className='font-bold text-[17px]  text-[#0481EC] '>Member</h1>
                <p className='font-bold text-[14px] '>ITPA (Information Technology</p>
                <p className='font-bold text-[14px] '>Professionals Association)</p>
              </div>
          </div>
       
       </div>


      <div>
      <Image
          // className=' w-[45vw] max-sm:w-[30vw]'
          src={Main.src}
          alt="Main profile"  width={700} height={900} priority />
      </div>
    </div>
  )
}

export default Hero