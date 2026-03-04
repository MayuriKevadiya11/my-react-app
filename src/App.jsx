import React from 'react';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import Categories from './components/Categories/Categories';
import Categories_page from './components/Categories/Categories-page';
import Aboutus from './components/Aboutus/Aboutus';
const App = () => {
  return (

    <BrowserRouter>

    
    <Routes>
    
      
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/Info' element={<Info/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/Categories' element={<Categories/>}></Route>
      <Route path='/Categories_page' element={<Categories_page/>}></Route>
      <Route path='/Aboutus' element={<Aboutus/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
        
   
    
  );
}

export default App;

