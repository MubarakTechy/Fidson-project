import React from 'react'
import Navbar from '../../src/component/Navbar';
import Footer from '../../src/component/Footer';
import Home from '../app/Homelanding/Home';


const page = () => {
  return (
    <div>
          <Navbar />
          <Home />
          <Footer />
    </div>
  )
}

export default page