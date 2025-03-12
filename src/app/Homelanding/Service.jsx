import React from 'react';
import Image from 'next/image';
import Max1 from '../../image/blogger_15560223.png';
import Max2 from '../../image/graphic-editor_11904679.png';
import Max3 from '../../image/software-development_17789074.png';
import Max4 from '../../image/solution_12095764.png';
import Max5 from '../../image/online-marketing_12640708.png';
import Max6 from '../../image/training_4413247.png';

const Service = () => {
  const services = [
    {
      src: Max1.src,
      alt: 'IT Sales',
      title: "IT Sales Consultant",
      description: "Expert guidance on IT product selection tailored to your business needs, ensuring cost-effective solutions that drive growth and efficiency."
    },
    {
      src: Max2.src,
      alt: 'Graphic Design',
      title: "Graphic Designer",
      description: "Creative visual solutions that captivate your audience, from branding materials to digital assets designed to enhance your market presence."
    },
    {
      src: Max3.src,
      alt: 'Web Development',
      title: "Web Development",
      description: "Custom website creation with responsive design, intuitive user experience, and scalable architecture to establish your digital foundation."
    },
    {
      src: Max4.src,
      alt: 'Cloud Solutions',
      title: "Cloud Solutions",
      description: "Secure and flexible cloud infrastructure implementation that optimizes operations, reduces costs, and enables seamless business continuity."
    },
    {
      src: Max5.src,
      alt: 'Digital Marketing',
      title: "Digital Marketing",
      description: "Results-driven strategies across multiple channels to increase brand visibility, engage target audiences, and convert prospects into customers."
    },
    {
      src: Max6.src,
      alt: 'IT Training',
      title: "Information Tech Training",
      description: "Comprehensive skill development programs designed to empower your team with the latest technical knowledge and practical expertise."
    }
  ];

  return (
   <>
        <div className='flex flex-col items-center justify-center px-4 py-12 max-w-6xl mx-auto'>
      <h1 className='font-bold text-[#0481EC] text-[28px] md:text-[37px] mb-4 text-center'>Our Services</h1>
      <div className='w-full'>
        <p className='text-[#242424] font-bold text-[16px] md:text-[18px] text-center mb-12 max-w-3xl mx-auto'>
          We provide exceptional customer service to help our customers feel heard, valued, and appreciated through our comprehensive range of IT and digital solutions.
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='flex flex-col items-center bg-white rounded-lg shadow-md p-6 
              hover:shadow-xl hover:scale-105 transition-all duration-300 
              hover:border-t-4 hover:border-[#0481EC] cursor-pointer'
            >
              <div className='mb-4 bg-[#f0f9ff] p-4 rounded-full group-hover:bg-[#e0f2fe] transition-colors duration-300'>
                <Image 
                  src={service.src}
                  alt={service.alt} 
                  width={60} 
                  height={60} 
                  priority 
                  className='h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 hover:rotate-12'
                />
              </div>
              <h2 className='font-bold text-[20px] md:text-[25px] text-center mb-2 text-gray-800 
              hover:text-[#0481EC] transition-colors duration-300'>{service.title}</h2>
              <p className='text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  );
};

export default Service;