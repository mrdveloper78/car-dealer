import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../Components/Home';



const MainLayer = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Home/>
            <Footer />
        </div>
    )
}


export default MainLayer;
