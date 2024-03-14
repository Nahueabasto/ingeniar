import React from 'react';
import NavBar from '../component/Navbar';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';
export default function Home(){
    return(
        <div>
            <NavBar />
            <Slider />
            <Phrase />
            <Footer />
        </div>
    )
}