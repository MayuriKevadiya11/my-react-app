import React from 'react';

function Info() {
  return (
   <section className=' bg-[#FFEED0] py-10 md:py-7 px-6'>
    <div className='flex flex-col md:flex-row  '>
   <div className='flex justify-start item-start'>
      <img  className='w-full h-auto pt-5 pb-20 max-w-[260px] sm:max-w-[320px] md:max-w-[360px]  object-cover ' src="/Rectangle5.png"/>
    </div>
      <div className='flex flex-col px-10 md:px-12 lg:px-30 mt-20 mb-20 justify-center'>
        
        <h1 className='font-cormorant font-semibold tracking-[0.06em] text-center text-xl sm:text-lg md:text-xl lg:text-5xl text-[#170809]'>Elevate Your Elegance with Our Exquisite Lehengas</h1>
        <p className='max-w-4xl opacity-75 tracking-[0.05em] text-center font-cormorant font-semibold  sm:text-base md:text-lg lg:text-sm text-[#170809]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
       <div className='flex  justify-end item-end '>
     <img className='w-full h-auto  pt-20 pb-5 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] object-cover' src="/Rectangle6.png"/>
        </div>
    </div>
   </section>
  );
}

export default Info;
