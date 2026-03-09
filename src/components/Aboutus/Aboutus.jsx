import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Origins and Founding",
    content:
      "Arpita Patel, a graduate of a prestigious fashion school, had always harbored a passion for design and a deep appreciation for the intricate details of traditional textile work. Inspired by her cultural heritage and the desire to create modern yet timeless pieces, she founded Vistra The Designer Studio in 2008. The studio was established with the vision of merging traditional techniques with modern aesthetics, creating a brand that appeals to a diverse clientele."
  },
  {
    title: "Growth and Expansion",
    content:
      "From its humble beginnings as a small boutique in surat, Vistra The Designer Studio quickly gained popularity for its exquisite designs and high-quality craftsmanship. The brand's commitment to excellence and innovation in design resonated with fashion enthusiasts, leading to rapid growth. Within a few years, the studio expanded its presence, opening additional stores in major cities across India."
  },
  {
    title: "Design Philosophy",
    content:
      "Vistra The Designer Studio is renowned for its unique design philosophy that emphasizes the fusion of traditional and contemporary elements. The studio's collections often feature intricate embroidery, handwoven fabrics, and rich textures, combined with modern silhouettes and cuts. This approach not only preserves traditional craftsmanship but also makes it relevant to modern fashion trends."
  },
  {
    title: "Signature Collections",
    content:
      "Over the years, Vistra The Designer Studio has launched several iconic collections that have garnered critical acclaim and commercial success. These collections often draw inspiration from various cultural and artistic sources, showcasing a wide range of styles from elegant bridal wear to chic casual outfits. The studio is particularly known for its bridal collections,enegement collections which blend opulence with subtle elegance, making them highly sought after by brides-to-be."
  },
  {
    title: "Sustainability and Ethical Practices",
    content:
      "In recent years, Vistra The Designer Studio has also made significant strides towards sustainability and ethical fashion. The brand has adopted eco-friendly practices, such as using organic fabrics, minimizing waste, and supporting fair trade. This commitment to sustainability has further enhanced the studio's reputation as a socially responsible and forward-thinking brand."
  },
  {
    title: "Recognition and Awards",
    content:
      "Over the years, Vistra The Designer Studio has launched several iconic collections that have garnered critical acclaim and commercial success. These collections often draw inspiration from various cultural and artistic sources, showcasing a wide range of styles from elegant bridal wear to chic casual outfits. The studio is particularly known for its bridal collections,enegement collections which blend opulence with subtle elegance, making them highly sought after by brides-to-be."
  },
  {
    title: "Future Prospects",
    content:
      "Looking ahead, Vistra The Designer Studio aims to continue its journey of innovation and excellence. The brand plans to expand its global presence, exploring new markets and reaching out to a broader audience. With a strong foundation in traditional craftsmanship and a keen eye for contemporary trends, Vistra The Designer Studio is poised to remain a significant player in the fashion industry for years to come."
  },
  {
    title: "Conclusion",
    content:
      "Vistra The Designer Studio's remarkable journey from a small boutique to a renowned fashion brand is a testament to the power of creativity, dedication, and a deep respect for tradition. With its unique design philosophy, commitment to sustainability, and continuous pursuit of excellence, the studio has established itself as a beacon of innovation and quality in the world of fashion."
  }
];


function Aboutus() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <div className="relative  items-center justify-center">
        
        <img 
          src="/IMG_2347.png" 
          className="w-full h-100 object-cover object-[center_20%]" 
        />
      
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/80  justify-end p-6">
              
              </div>
         <Navbar/>
          <div className="absolute top-60 left-10 md:top-60 md:left-70 top-20 left-5 text-white ">
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

     <div className="min-h-screen bg-black flex items-center justify-center px-6 py-6">
      <div className="w-full max-w-4xl text-white">

        {sections.map((section, index) => (
          <div key={index} className="border-b border-[#3a3b42] py-8">

            {/* Header */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex items-center justify-between "
            >
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide font-light">
                {section.title}
              </h2>

              {/* Square Arrow Button */}
              <div className="border border-[#5a5b63] p-2 transition-all duration-300 group-hover:border-[#bfa37a]">
                <img src='/Vector10.png'
                  size={18}
                  className={`transition-transform duration-300 sm:${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Content */}
         
            <div
              className={`overflow-hidden transition-all duration-500 md:max-h-full md:opacity-100 md:mt-6 ${
                open === index
                  ? "max-h-96 opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-[#b9b6b0] leading-relaxed font-light">
                {section.content}
              </p>
            </div>
            

          </div>
        ))}

      </div>
    </div>

     <section className="bg-[#FFEED0] bg-[url('/Isolation_Mode.png')] w-full h-full relative bg-cover bg-center">
     <div className=''>
      <div className='flex items-center justify-center' >
          <img src='/Vector.png'></img>
        <h3>Lorem Ipsum</h3>
        <img src='/Vector1.png'></img>
        </div>
        <h1 className='font-cormorant  tracking-[0.05em] text-center text-xl sm:text-lg md:text-xl lg:text-5xl text-[#170809] '>Lorem Ipsum</h1>
     </div>
     <div className='px-10 py-10 grid grid-cols-2 lg:grid-cols-3 gap-5 group overflow-hidden item-center'>
      <img src='img1.jpg' className='w-full h-[400px] '></img>
      <img src='img2.png' className='w-full h-[400px] '></img>
      <img src='img3.png' className='w-full h-[400px] '></img>
      <img src='img4.png' className='md:hidden w-full h-[400px] '></img>
     </div>
     
     </section>


    </div>
  );
}

export default Aboutus;
