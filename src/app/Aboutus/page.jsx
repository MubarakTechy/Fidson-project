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
           <h1 className='font-bold text-[#0481EC] max-sm:text-[27px] max-sm:w-[75vw] text-[37px] '>We&apos;re glad you are here</h1>
            <div className='flex max-sm:flex-col  items-center p-5 gap-5 game'>
            <div className='flex  max-sm:flex-col flex-col gap-2'>
                <h1 className='max-sm:w-[75vw] font-bold text-[30px] max-lg:w-[80vw] w-[30vw]'>About Us</h1>
                <h1 className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[40vw]'>
                1691 Tech Solutions is a forward-thinking IT and digital services company committed to 
                empowering businesses with innovative, efficient, and customer-centric solutions.
                At our core, we believe that technology should not just support your business—but elevate it. 
                That&apos;s why we offer a comprehensive suite of services tailored to meet your unique needs, 
                whether you're a startup finding your digital footing or an enterprise looking to scale.
                Our offerings span across:
                • IT Sales Consulting &apos; Providing expert advice to help you select the right tech tools and 
                solutions that drive efficiency and sustainable growth.
                • Graphic Design &apos; Delivering captivating visual assets and branding that resonate with 
                your audience and amplify your market presence.
                • Web Development &apos; Creating responsive, intuitive, and scalable websites that form a 
                strong digital foundation for your business.
                • Cloud Solutions &apos; Implementing secure and flexible cloud infrastructure that streamlines 
                operations, reduces cost, and ensures seamless business continuity.
                • Digital Marketing &apos; Crafting data-driven strategies to enhance your visibility, engage 
                your audience, and turn leads into loyal customers.
                • Information Technology Training &apos; Equipping individuals and teams with practical, 
                up-to-date technical skills to stay ahead in today&apos;s dynamic digital landscape.
                </h1>
                <h1 className='max-sm:w-[75vw] text-[15px] leading-7 max-lg:w-[80vw] w-[40vw]'>
                    At 1691 Tech Solution, we recover data from faulty storage devices and electronic gadgets with precision and expertise. Additionally, we provide internship opportunities to empower aspiring tech professionals with hands-on experience.
                </h1>
            </div>
              <div >
                <Image
                    className=' w-[35vw] max-sm:w-[60vw]'
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
                        className=' w-[45vw] max-sm:w-[60vw]'
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
                        At 1691 Tech Solutions, we believe in using technology not only as a tool for business 
                        transformation but also as a catalyst for social impact. Our commitment to Corporate Social 
                        Responsibility (CSR) is deeply rooted in our core values—innovation, empowerment, and 
                        inclusion.
                        We are dedicated to giving back to the communities we serve by creating meaningful 
                        opportunities for growth, education, and digital advancement. Through various initiatives, we 
                        strive to bridge the digital divide and foster an inclusive tech ecosystem that benefits all.
                        Tech Empowerment Quarterly Program
                        As part of our CSR initiatives, we proudly run the Tech Empowerment Quarterly Program—a 
                        structured upskilling initiative designed to equip aspiring tech talents with practical, in-demand 
                        digital skills.
                        This program targets passionate individuals—particularly students, fresh graduates, and young 
                        professionals—who are eager to stand out in the global tech marketplace. Participants undergo 
                        intensive hands-on training across areas such as Web Development, Digital Marketing, IT Sales, 
                        Graphic Design, and Cloud Solutions.
                        Top-performing participants also gain access to mentorship, internship opportunities, and career 
                        advancement support, positioning them for success in an increasingly digital world.
                        At 1691 Tech Solutions, we believe that investing in people is the most impactful way to shape 
                        a better future. Through our CSR efforts, we remain committed to driving sustainable change—
                        one tech skill at a time
                        </h1>
                        
                    <div className='flex flex-col gap-3'>
                        <h1 className='max-sm:w-[75vw] font-bold text-[30px]'> History: </h1>
                        <p className='max-sm:w-[75vw] text-[15px] max-lg:w-[80vw] leading-7 w-[50vw]'>
                        
                        1691 Tech Solutions was founded with a vision to bridge the gap between business needs and 
                        digital innovation. What started as a small initiative driven by passion for technology and 
                        problem-solving has evolved into a trusted solutions provider for individuals, startups, and
                        organizations seeking growth through IT.
                        The name “1691” symbolizes innovation, precision, and purpose—core values that have guided 
                        our journey from day one. With a deep-rooted belief in the power of technology to transform 
                        lives, we set out to create a company that doesn&apos;t just deliver services but builds solutions that 
                        matter.
                        Since our inception, we have steadily expanded our service offerings—ranging from IT Sales 
                        Consulting and Web Development to Cloud Solutions, Digital Marketing, and Professional 
                        Training. Alongside our commercial growth, we have remained committed to social impact 
                        through initiatives like our Tech Empowerment Quarterly Program, aimed at equipping future 
                        talents with practical digital skills to thrive globally.
                        Today, 1691 Tech Solutions stands as a growing hub of creativity, innovation, and community 
                        development—powered by a team that is passionate about delivering excellence and making 
                        technology accessible to all.
                        Our journey is just beginning, and we invite you to be a part of it.
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