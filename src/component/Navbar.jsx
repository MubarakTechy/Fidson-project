'use client'
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image'
import Max2 from '../image/1691 Logo.PNG';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="fixed overflow-hidden top-0 left-0 right-0 z-50 bg-[white] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
      
          <div className="flex-shrink-0">
          <Image
        //   className=' w-[35vw] max-sm:w-[70vw]'
          src={Max2.src}
          alt="Max profile"
          width={170} height={70} 
          priority  
        />
          </div>

          <div className="hidden max-lg:flex-none md:block">
            <ul className="flex space-x-8">

            <li>
                <a href="/Product" className="relative font-mono text-lg text-black hover:text-[#0481EC] transition-all duration-500 ease-in-out cursor-pointer group">
                  Product
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out group-hover:w-full" />
                </a>
              </li>
              <li >
                <a href="" className="relative font-mono text-lg text-[black] hover:text-[#0481EC] transition-all duration-500 ease-in-out cursor-pointer group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out group-hover:w-full" />
                </a>
              </li>
             
              <li>
                <a href="/Aboutus" className="relative font-mono text-lg text-black hover:text-[#0481EC] transition-all duration-500 ease-in-out cursor-pointer group">
                About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="/Contactus"className="relative font-mono text-lg text-black hover:text-[#0481EC] transition-all duration-500 ease-in-out cursor-pointer group">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out group-hover:w-full" />
                </a>
              </li>
             
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#0481EC] transition-colors duration-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <IoCloseSharp size={50} className="h-6 w-6 transform transition-transform duration-500" />
              ) : (
                <RxHamburgerMenu size={50} className="h-6 w-6 transform transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden items-center text-center overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="px-2 pt-2 pb-3 space-y-1">

              <li>
                    <span className="block font-mono text-lg text-black hover:text-[#0481EC] hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                        Product
                    </span>
                </li>
                <li>
                    <a href="http://"className="block font-mono text-lg text-black hover:text-[#0481EC] hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                        Home
                    </a>
                </li>
                
                <li>
                    <span className="block font-mono text-lg text-black hover:text-[#0481EC] hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                        About 
                    </span>
                </li>
                <li>
                    <span className="block font-mono text-lg text-black hover:text-[#0481EC] hover:translate-x-2 transition-all duration-500 ease-in-out py-2">
                        Contact Us
                    </span>
                </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;