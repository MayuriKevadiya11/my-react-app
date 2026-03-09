// components/Navbar.jsx

import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
    <div className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-10 py-9 text-[#EFE6D6]">
        
        <img src="/nav_img.png" alt="Logo" className="w-35" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-15 text-[16px] font-semibold">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Categories_page'>Category</Link></li>
          <li><Link to='/Aboutus'>About Us</Link></li>
          <li className='border border-box px-[10px] py-[10px]  items-center'><Link>Contact Us</Link></li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed right-0 bg-black text-white text-center py-6 space-y-6">
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/Categories_page'>Category</Link></div>
          <div><Link to='/Aboutus'>About Us</Link></div>
          <div>Contact Us</div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Navbar;

