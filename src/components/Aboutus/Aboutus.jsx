import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
 


function Aboutus() {
  return (
    <div>
      <div className="relative w-full  items-center justify-center">
        
        <img 
          src="/IMG_2347.png" 
          className="w-full h-100 object-cover object-[center_20%]" 
        />
      
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80  justify-end p-6">
              
              </div>
         <Navbar/>
          <div className="absolute top-60 left-70 text-white ">
          <h1 className="text-3xl font-Cormorant md:text-5xl text-[#EFE6D6] leading-[100%] tracking-[0.05em] font-semibold">
            AboutUs Page
          </h1>
           <div className="mt-4 flex justify-between items-center text-sm md:text-sm">
            <div className='flex space-x-2'>
              <p className='font-Josefin font-semibold '>Home</p>
             <img src='Vector9.png' className="w-[8.5px] h-[17px] justify-center items-center"/>
             <p className='font-Josefin font-semibold '>Categories Page</p>
            </div>
            
          </div>
         
        </div>
      
         </div>


     <section className="bg-[#FFEED0] bg-[url('/Isolation_Mode.png')] w-full h-full relative bg-cover bg-center">
    <div className='flex flex-col  md:flex-row'>
   
     
    
      <div className='flex flex-col px-10 md:px-40 lg:px-50 mt-15 mb-15'>
        <div className='flex items-center justify-center' >
          <img src='/Vector.png'></img>
        <h3>Lorem Ipsum</h3>
        <img src='/Vector1.png'></img>
        </div>
        <h1 className='mt-2 font-cormorant  tracking-[0.05em] text-center text-xl sm:text-lg md:text-xl lg:text-5xl text-[#170809] '>Vistra The Designer Studio</h1>
        <p className='mt-4 max-w-4xl opacity-75 tracking-[0.05em] text-center font-cormorant font-semibold  sm:text-base md:text-lg lg:text-sm text-[#170809]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
     
     <div className="text-center mt-12">
           <Link to=''>
            <button className="border border-white  px-8 py-3 hover:bg-white hover:text-[#3b0d0d] transition duration-300">
              Explore More
            </button>
            </Link>
          </div>
        
     
      </div>
    
        
    </div>
   </section>

    <div className='bg-[#170809]  min-h-screen w-full bg-cover bg-center px-6 py-16'>
 
    <div className='flex relative'>
        
    <h1 className='opacity-75 tracking-[0.05em]  font-cormorant font-semibold  sm:text-base md:text-lg lg:text-lg text-white'>Origins and Founding</h1>
    <img className='absolute border border-[#5a5b63] transition-all duration-300 right-0 top-0 ' src='/Vector10.png'></img>
    </div>
    <div>
    <p className='mt-5 opacity-75 tracking-[0.05em]  font-cormorant font-semibold  sm:text-base md:text-lg lg:text-[15px] text-white'>Arpita Patel, a graduate of a prestigious fashion school, had always harbored a passion for design and a deep appreciation for the intricate details of traditional textile work. Inspired by her cultural heritage and the desire to create modern yet timeless pieces, she founded Vistra The Designer Studio in 2008. The studio was established with the vision of merging traditional techniques with modern aesthetics, creating a brand that appeals to a diverse clientele.</p>
    </div>
 
    
    </div>

    </div>
  );
}

export default Aboutus;
