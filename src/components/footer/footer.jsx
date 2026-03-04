import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <section
      className=" bg-[url('/Rectangle14.png')]  bg-cover bg-center bg-no-repeat text-white">
           


     
      <div className="relative  flex flex-col items-center justify-center text-center ">
      
        <img src="/Mask-group.png" alt="Logo" className="py-10 h-50" />

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-10 mt-5 text-2xl">
          <i className="fab fa-whatsapp"><img src='/Whatsappimg.png'></img></i>
          <img src='/Vector6.png'></img>
          <i className="fab fa-instagram"><img src='/Instagramimg.png'></img></i>
          <img src='/Vector6.png'></img>
          <i className="fab fa-facebook"><img src='/Instagramimg.png'></img></i>
          
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 px-4 py-10 mt-4  flex flex-col sm:flex-row justify-between  items-center text-sm">
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 text-center">
          <a href="#" className="hover:underline">Home</a>
          <Link to='/Aboutus'className='hover:underline'>About us</Link>
          <a href="#" className="hover:underline">Category</a>
        
        </div>
        <p className='text-sm sm:text-base '>Copyright © 2022 | All Rights Reserved</p>
        
      </div>
      
    </section>
  );
}

export default Footer;
