import React from 'react';

function Info() {
  return (
   <section className=' bg-[#FFEED0]  relative overflow-hidden'>
    <div className='flex flex-col md:flex-row'>
   
      <img  className='w-50 h-full py-10' src="/Rectangle5.png"/>
    
      <div className='flex flex-col px-10 md:px-20 lg:px-30 mt-15  '>
        <div className='flex items-center justify-center' >
          <img src='/Vector.png'></img>
        <h3>Lorem Ipsum</h3>
        <img src='/Vector1.png'></img>
        </div>
        <h1 className='font-cormorant font-semibold tracking-[0.05em] text-center text-xl sm:text-lg md:text-xl lg:text-5xl text-[#170809]'>Lorem Ipsum</h1>
        <p className='mt-2 max-w-4xl opacity-75 tracking-[0.05em] text-center font-cormorant font-semibold  sm:text-base md:text-lg lg:text-sm text-[#170809]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      
        <img className='w-50 py-20  ' src="/Rectangle6.png"/>
        
    </div>
   </section>
  );
}

export default Info;
