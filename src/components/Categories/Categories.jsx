import React from 'react';
import {Link} from 'react-router-dom';
const images = [
  {
    id: 1,
    src: "img1.jpg",
    title: "Engagement Collection",
    overlay: true,
  },
  {
    id: 2,
    src: "/img2.png",
  },
  {
    id: 3,
    src: "/img3.png",
  },
  {
    id: 4,
    src: "/img4.png",
  },
];
const Categories = () => {
  return (
    <section className="bg-[url('/Rectangle12.png')] text-white py-16 px-6">
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest font-Cormorant Garamond  opacity-80">
          Lorem Ipsum
        </p>
        <h2 className="text-4xl md:text-5xl font-Josefin Sans mt-2">
          Categories
        </h2>
      </div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((item) => (
          <div key={item.id} className="relative group overflow-hidden">
            <img
              src={item.src}
              alt="category"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

          
            {item.overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-light">
                  {item.title}
                </h3>
                <div className="flex items-center mt-3">
                  <span className="mr-2">→</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>


       <div className="text-center mt-12">
       <Link to='/Categories_page'>
        <button className="border border-white px-8 py-3 hover:bg-white hover:text-[#3b0d0d] transition duration-300">
          Explore More
        </button>
        </Link>
      </div>
    </section>
  );
};


export default Categories;
