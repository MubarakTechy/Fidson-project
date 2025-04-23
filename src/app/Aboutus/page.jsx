"use client"
import React from 'react'
import Navbar from '../../component/Navbar';
import Image from 'next/image';
import Max2 from '../../image/man.jpg';
import Max3 from '../../image/computer.jpg';
import Max10 from '../../image/histroy.jpg';
import { SlPeople } from "react-icons/sl";
import Footer from '../../component/Footer';
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="flex flex-col items-center space-y-16">
          {/* About Us Section */}
          <section className="w-full flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-3/5 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
              <p className="text-base leading-7">
                1691 Tech Solutions is a forward-thinking IT and digital services company committed to 
                empowering businesses with innovative, efficient, and customer-centric solutions.
                At our core, we believe that technology should not just support your business—but elevate it. 
                That&apos;s why we offer a comprehensive suite of services tailored to meet your unique needs, 
                whether you're a startup finding your digital footing or an enterprise looking to scale.
                Our offerings span across.
              </p>
              
              <div className="space-y-3">
                <p className="text-base leading-7"><span className="font-bold">• Graphic Design:</span> Delivering captivating visual assets and branding that resonate with 
                your audience and amplify your market presence.</p>
                
                <p className="text-base leading-7"><span className="font-bold">• Web Development:</span> Creating responsive, intuitive, and scalable websites that form a 
                strong digital foundation for your business.</p>
                
                <p className="text-base leading-7"><span className="font-bold">• Cloud Solutions:</span> Implementing secure and flexible cloud infrastructure that streamlines 
                operations, reduces cost, and ensures seamless business continuity.</p>
                
                <p className="text-base leading-7"><span className="font-bold">• Digital Marketing:</span> Crafting data-driven strategies to enhance your visibility, engage 
                your audience, and turn leads into loyal customers.</p>
                
                <p className="text-base leading-7"><span className="font-bold">• Information Technology Training:</span> Equipping individuals and teams with practical, 
                up-to-date technical skills to stay ahead in today&apos;s dynamic digital landscape.</p>
              </div>
              
              <p className="text-base leading-7">
                At 1691 Tech Solution, we data from faulty storage devices and electronic gadgets with precision and expertise. Additionally, we provide internship opportunities to empower aspiring tech professionals with hands-on experience.
              </p>
            </div>
            
            <div className="w-full md:w-2/5">
              <Image
                className="w-full rounded-lg shadow-md"
                src={Max2}
                alt="Team member image"
                width={500}  
                height={800}
                priority 
              />
            </div>
          </section>

          {/* Our Aim Section */}
          <section className="w-full flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="w-full md:w-3/5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Aim</h2>
              <p className="text-base leading-7">
                At 1691 Tech Solutions, our aim is to empower businesses and individuals by delivering 
                innovative, reliable, and scalable IT and digital solutions. We are dedicated to bridging the gap 
                between technology and business goals enhancing productivity, driving growth, and enabling 
                long-term success through customer-focused strategies and expert-driven services.
              </p>
            </div>
            
            <div className="w-full md:w-2/5">
              <Image
                className="w-full rounded-lg shadow-md"
                src={Max3}
                alt="Computer and technology image"
                width={500}
                height={800}
                priority 
              />
            </div>
          </section>

          {/* CSR Section */}
          <section className="w-full flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-3/5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Corporate Social Responsibility (CSR)</h2>
              <p className="text-base leading-7">
                At 1691 Tech Solutions, we believe in using technology not only as a tool for business 
                transformation but also as a catalyst for social impact. Our commitment to Corporate Social 
                Responsibility (CSR) is deeply rooted in our core values innovation, empowerment, and 
                inclusion.
              </p>
              <p className="text-base leading-7">
                We are dedicated to giving back to the communities we serve by creating meaningful 
                opportunities for growth, education, and digital advancement. Through various initiatives, we 
                strive to bridge the digital divide and foster an inclusive tech ecosystem that benefits all.
              </p>
              <p className="text-base leading-7">
                <span className="font-semibold">Tech Empowerment Quarterly Program</span><br/>
                As part of our CSR initiatives, we proudly run the Tech Empowerment Quarterly Program a 
                structured upskilling initiative designed to equip aspiring tech talents with practical, in-demand 
                digital skills.
              </p>
              <p className="text-base leading-7">
                This program targets passionate individuals particularly students, fresh graduates, and young 
                professionals who are eager to stand out in the global tech marketplace. Participants undergo 
                intensive hands-on training across areas such as Web Development, Digital Marketing, IT Sales, 
                Graphic Design, and Cloud Solutions.
              </p>
              <p className="text-base leading-7">
                Top performing participants also gain access to mentorship, internship opportunities, and career 
                advancement support, positioning them for success in an increasingly digital world.
              </p>
              <p className="text-base leading-7">
                At 1691 Tech Solutions, we believe that investing in people is the most impactful way to shape 
                a better future. Through our CSR efforts, we remain committed to driving sustainable change 
                one tech skill at a time.
              </p>
            </div>
            
            <div className="w-full md:w-2/5">
              <Image
                className="w-full rounded-lg shadow-md"
                src={Max10}
                alt="History image"
                width={500}
                height={800}
                priority 
              />
            </div>
          </section>

          {/* History Section */}
          <section className="w-full space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">History</h2>
            <div className="space-y-4">
              <p className="text-base leading-7">
                1691 Tech Solutions was founded with a vision to bridge the gap between business needs and 
                digital innovation. What started as a small initiative driven by passion for technology and 
                problem solving has evolved into a trusted solutions provider for individuals, startups, and
                organizations seeking growth through IT.
              </p>
              <p className="text-base leading-7">
                The name "1691" symbolizes innovation, precision, and purpose core values that have guided 
                our journey from day one. With a deep rooted belief in the power of technology to transform 
                lives, we set out to create a company that doesn&apos;t just deliver services but builds solutions that 
                matter.
              </p>
              <p className="text-base leading-7">
                Since our inception, we have steadily expanded our service offerings ranging from IT Sales 
                Consulting and Web Development to Cloud Solutions, Digital Marketing, and Professional 
                Training. Alongside our commercial growth, we have remained committed to social impact 
                through initiatives like our Tech Empowerment Quarterly Program, aimed at equipping future 
                talents with practical digital skills to thrive globally.
              </p>
              <p className="text-base leading-7">
                Today, 1691 Tech Solutions stands as a growing hub of creativity, innovation, and community 
                development powered by a team that is passionate about delivering excellence and making 
                technology accessible to all.
              </p>
              <p className="text-base leading-7">
                Our journey is just beginning, and we invite you to be a part of it.
              </p>
              <p className="text-base leading-7">
                Our journey has been fueled by continuous learning, market research, and technical training to ensure we deliver top-tier solutions to our valued clients.
              </p>
              <p className="text-base leading-7">
                With over a decade of experience, numerous certifications, and an unwavering dedication to excellence, we remain committed to offering the best IT solutions to our esteemed customers.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full mt-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">More About us</h2>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex flex-col items-center p-6 bg-gray-50 border-2 border-[#0481EC] rounded-lg shadow-sm w-full sm:w-1/2">
                <SlPeople className="text-[#0481EC] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4">Successful Clients</h3>
                <div className="text-3xl font-bold text-[#0481EC]">
                  <CountUp 
                    start={0}
                    end={1250}
                    duration={2.5}
                    separator=","
                    suffix="+"
                    decimals={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={500}
                  />
                </div>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-gray-50 border-2 border-[#0481EC] rounded-lg shadow-sm w-full sm:w-1/2">
                <SlPeople className="text-[#0481EC] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-4">Client Satisfaction</h3>
                <div className="text-3xl font-bold text-[#0481EC]">
                  <CountUp 
                    start={0}
                    end={700}
                    duration={2.5}
                    separator=","
                    suffix="%"
                    decimals={0}
                    enableScrollSpy={true}
                    scrollSpyDelay={500}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default AboutUs 