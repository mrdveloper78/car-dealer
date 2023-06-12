import React from 'react';
import Navbar from '../Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Gallery from '../Components/Gallery';
import Find from '../Components/Find';
import CartProduct from '../Components/CartProduct';
import Footer from '../Components/Footer';


const PublicLayout  = () => {
    return (
        <div className='w-[100vw] box-border'>
            <Navbar />
            <Routes>
                <Route path="gallery" element={<Gallery />} />
                <Route path="find" element={<Find />} />
                <Route path="cart" element={<CartProduct />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    )
}


export default PublicLayout ;
