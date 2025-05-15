'use client'
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Max2 from '../image/navlogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname === path) return true;
    return false;
  };

  return (
    <nav className="fixed overflow-hidden top-0 left-0 right-0 z-50 bg-[white] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
      
          <div className="flex-shrink-0">
            <a href="/">
            <Image
              src={Max2.src}
              alt="1691 Logo"
              width={140} 
              height={50} 
              priority  
            />
            </a>
          </div>

          <div className="hidden max-lg:flex-none md:block">
            <ul className="flex space-x-8">
               <li>
                <a 
                  href="/" 
                  className={`relative font-mono text-lg ${isActive('/') ? 'text-[#0481EC]' : 'text-black hover:text-[#0481EC]'} transition-all duration-500 ease-in-out cursor-pointer group`}
                >
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
              <li>
                <a 
                  href="/Aboutus" 
                  className={`relative font-mono text-lg ${isActive('/Aboutus') ? 'text-[#0481EC]' : 'text-black hover:text-[#0481EC]'} transition-all duration-500 ease-in-out cursor-pointer group`}
                >
                  About
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out ${isActive('/Aboutus') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
              <li>
                <a 
                  href="/products" 
                  className={`relative font-mono text-lg ${isActive('/products') ? 'text-[#0481EC]' : 'text-black hover:text-[#0481EC]'} transition-all duration-500 ease-in-out cursor-pointer group`}
                >
                  Product
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out ${isActive('/productss') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
             
              
              <li>
                <a 
                  href="/blog" 
                  className={`relative font-mono text-lg ${isActive('/blog') ? 'text-[#0481EC]' : 'text-black hover:text-[#0481EC]'} transition-all duration-500 ease-in-out cursor-pointer group`}
                >
                  Blog
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out ${isActive('/blog') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              </li>
              <li>
                <a 
                  href="/Contactus" 
                  className={`relative font-mono text-lg ${isActive('/Contactus') ? 'text-[#0481EC]' : 'text-black hover:text-[#0481EC]'} transition-all duration-500 ease-in-out cursor-pointer group`}
                >
                  Contact Us
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0481EC] transition-all duration-500 ease-in-out ${isActive('/Contactus') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
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
                <IoCloseSharp size={24} className="transform transition-transform duration-500" />
              ) : (
                <RxHamburgerMenu size={24} className="transform transition-transform duration-500" />
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
              <a 
                href="/"
                className={`block font-mono text-lg ${isActive('/') ? 'text-[#0481EC] translate-x-2' : 'text-black hover:text-[#0481EC] hover:translate-x-2'} transition-all duration-500 ease-in-out py-2`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/Aboutus"
                className={`block font-mono text-lg ${isActive('/Aboutus') ? 'text-[#0481EC] translate-x-2' : 'text-black hover:text-[#0481EC] hover:translate-x-2'} transition-all duration-500 ease-in-out py-2`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/products"
                className={`block font-mono text-lg ${isActive('/productss') ? 'text-[#0481EC] translate-x-2' : 'text-black hover:text-[#0481EC] hover:translate-x-2'} transition-all duration-500 ease-in-out py-2`}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="/blog"
                className={`block font-mono text-lg ${isActive('/blog') ? 'text-[#0481EC] translate-x-2' : 'text-black hover:text-[#0481EC] hover:translate-x-2'} transition-all duration-500 ease-in-out py-2`}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="/Contactus"
                className={`block font-mono text-lg ${isActive('/Contactus') ? 'text-[#0481EC] translate-x-2' : 'text-black hover:text-[#0481EC] hover:translate-x-2'} transition-all duration-500 ease-in-out py-2`}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;