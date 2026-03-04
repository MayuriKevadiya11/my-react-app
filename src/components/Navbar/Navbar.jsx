// components/Navbar.jsx

import React, { useState } from 'react';


function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4 py-4 text-[#EFE6D6]">
        
        <img src="/Mask-group.png" alt="Logo" className="w-28" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
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
        <div className="md:hidden bg-black text-white text-center py-6 space-y-6">
          <div>Home</div>
          <div>About</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>
      )}
    </div>
    </>
  );
}

export default Navbar;

