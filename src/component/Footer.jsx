'use client'
import React from 'react';
import Image from 'next/image';
import Max2 from '../image/newFooter.png';
import { FaPhone, FaInstagram , FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const Footer = () => {
  return (
    <footer className=" mind bg-gradient-to-r from-blue-600 to-blue-800 pt-12 pb-6">
      <div className="container mx-auto px-4">
     
     
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="mb-8 lg:mb-0">
            <Image 
              src={Max2.src} 
              alt="1691 Tech Solution Logo" 
              width={200} 
              height={60} 
              priority 
              className="drop-shadow-lg"
            />
            <p className="text-blue-100 mt-4 max-w-sm">
              Tranforming Ideas into Solutions.
            </p>
          </div>
          
   
   
   
   
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
      
      
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-white text-xl mb-2 border-b border-blue-400 pb-2">Services</h2>
              <a href="https://wa.me/message/MBU45KTNZGT6O1" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Sales of Gadget/Accessories
              </a>
              <a href="/Repair" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
               Repair of Gadget
              </a>
              <a href="/Aboutus" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Web Development
              </a>
              <a href="" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Cloud Solution
              </a>
              <a href="" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Information Tech Training
              </a>

            </div>
            

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-white text-xl mb-2 border-b border-blue-400 pb-2">For Clients</h2>
              <a href="/" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Customer Reviews
              </a>
              <a href="/Faq" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                FAQ
              </a>
              <a href="/Contact" className="text-blue-100 hover:text-white hover:translate-x-1 transition-all">
                Contact Us
              </a>
            </div>
            

            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-white text-xl mb-2 border-b border-blue-400 pb-2">Get in Touch</h2>
              <a href="tel:+2348139437666" className="flex items-center gap-2 text-blue-100 hover:text-white transition-all">
                <div className="bg-blue-500 p-2 rounded-full">
                  <FaPhone className="text-white" size={14} />
                </div>
                <span>+234 813 943 7666</span>
              </a>
              <a href="https://instagram.com/1691techsolution" className="flex items-center gap-2 text-blue-100 hover:text-white transition-all">
                <div className="bg-blue-500 p-2 rounded-full">
                  <FaInstagram className="text-white" size={14} />
                </div>
                <span>@1691techsolution</span>
              </a>
              <a href="https://twitter.com/1691Tech" className="flex items-center gap-2 text-blue-100 hover:text-white transition-all">
                <div className="bg-blue-500 p-2 rounded-full">
                  <FaXTwitter className="text-white" size={14} />
                </div>
                <span>@1691Tech</span>
              </a>
              <a href="mailto:info@1691techsolution.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-all">
                <div className="bg-blue-500 p-2 rounded-full">
                  <MdEmail className="text-white" size={14} />
                </div>
                <span>info@1691techsolution.com</span>
              </a>
            </div>
          </div>
        </div>
        

        <div className="border-t border-blue-400 mb-6"></div>
        

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 mb-4 md:mb-0">
          © {new Date().getFullYear()} 1691 Tech Solution. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/message/MBU45KTNZGT6O1" 
              className="bg-white hover:bg-blue-900 text-blue-600 hover:text-white p-2 rounded-full transition-all">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://instagram.com/1691techsolution" 
              className="bg-white hover:bg-blue-900 text-blue-600 hover:text-white p-2 rounded-full transition-all">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/1691Tech" 
              className="bg-white hover:bg-blue-900 text-blue-600 hover:text-white p-2 rounded-full transition-all">
              <FaXTwitter  size={20} />
            </a>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="bg-white hover:bg-blue-900 text-blue-600 hover:text-white font-medium py-2 px-4 rounded-full ml-2 transition-all">
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};




export default Footer;