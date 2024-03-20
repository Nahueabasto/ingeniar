import React, { useEffect } from 'react';
import NavBar from '../component/Navbar';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';

export default function Home(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte

    return(
        <div>
            <NavBar />
            <Slider />
            <Phrase />
            <Footer />
        </div>
    )
}