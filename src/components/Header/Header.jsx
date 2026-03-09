import React from 'react';
import Navbar from '../Navbar/Navbar';


function Header() {
  /*const[isopen,open]=usestate[0];*/
  return (
    <header className="relative w-full h-full md:h-screen bg-[url('/IMG_2347.png')] bg-cover bg-center">

     
      <div className="absolute inset-0 bg-black/40 flex items-end">
        
        <div className="w-full  bg-cover bg-center 
                        px-6 sm:px-10 md:px-16 lg:px-24 
                        py-10 sm:py-16 md:py-20 
                        text-center">

          <h1 className="font-cormorant font-semibold 
                         text-2xl sm:text-4xl md:text-4xl lg:text-6xl 
                         tracking-[4px] sm:tracking-[0.05m] 
                         text-white">
            Best Collection Ever
          </h1>

          <p className="mt-4 mx-auto max-w-3xl 
                        text-xs sm:text-sm md:text-base lg:text-lg 
                        font-josefin font-medium 
                        leading-relaxed 
                        text-[#EFE6D6] opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>

          

        </div>
      </div>
    </header>
  
      /*<header className="relative w-full min-h-screen bg-[url('/IMG_2347.png')] bg-cover aspect-[16/12] bg-center">*/

       
      /*<div className="absolute bottom-0 bg-[url('/Rectangle4.png')] mix-blend-soft-light  w-full  flex flex-col items-center justify-center px-4 md:px-10 lg:px-20 bg-cover bg-center text-center ">
       
       <h1 className='font-cormorant font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[5.9px] text-[#EFE6D6]'>Best Collection Ever</h1>
      <p className=' mt-2 max-w-4xl text-sm sm:text-base md:text-lg lg:text-sm font-josefin font-semibold leading-relaxed tracking-[0.05em] text-[#EFE6D6] opacity-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
       <a href="#" className='mt-2 inline-block border  text-sm font-josefin  font-semibold text-[#EFE6D6] md:box-border hover:bg-[#EFE6D6] hover:text-black transition duration-300' >Explor more</a>
  
   </div>
   </header>*/
   
   
   
  
   
  );
}

export default Header;
