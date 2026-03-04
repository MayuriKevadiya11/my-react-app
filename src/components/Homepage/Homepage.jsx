import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Navbar from '../Navbar/Navbar';
import Categories from '../Categories/Categories';

function Homepage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      
       <Info/>
       <Categories/>
    </div>
  );
};
export  default Homepage;