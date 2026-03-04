import React from 'react';
import Navbar from '../Navbar/Navbar';

const images = [
  {
    id: 1,
    src: "img1.jpg",
    title:"img"
    
  },
  {
    id: 2,
    src: "/img2.png",
    title:"img"
  },
  {
    id: 3,
    src: "/img3.png",
    title:"img"
  },
  {
    id: 4,
    src: "/img4.png",
    title:"img"
  },
];

function Categories_page() {
  return (

    <>
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
      Categories Page
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
   <div className="w-full bg-[#FFEED0] py-16 px-20">
    <div className='flex space-x-20 items-center'>
    <img src='Vector12.png'></img>
    <div>
   <img src="img2.png" alt="Profile 1" className="w-30 h-30 md:w-20 md:h-20 border-2 border-white rounded-full object-cover"/>  
   <p>sfsg</p>
   </div>
   <div>
   <img src="img3.png" alt="Profile 1" className="w-30 h-30 md:w-20 md:h-20 border-2 border-white rounded-full object-cover"/>  
   <p>sfsg</p>
   </div>
   <div>
   <img src="img4.png" alt="Profile 1" className="w-30 h-30 md:w-20 md:h-20 border-2 border-white rounded-full object-cover"/>  
   <p>sfsg</p>
   </div>
   <div>
   <img src="img1.jpg" alt="Profile 1" className="w-30 h-30 md:w-20 md:h-20 border-2 border-white rounded-full object-cover"/>  
   <p>sfsg</p>
   </div>

    <img  src='Vector12.png'></img>
      </div>
    <h2 className="text-[118px] font-Cormorant md:text-5xl text-[#170809] leading-[100%] tracking-[0.05em] py-10 item-center font-semibold">Engagement Lehenga</h2>
   
   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {images.map((item) => (
          <div key={item.id} className="relative group overflow-hidden">
            <img
              src={item.src}
              alt="category"
              className="w-full h-full object-cover  rounded-md "
            />
           <h1 className="mt-4 text-gray-700 text-lg">
               {item.title}
                </h1>
          
            
              
               
              
          
          </div>
        ))}
      </div>
  </div>
  
   </>
  );
};
export default Categories_page;