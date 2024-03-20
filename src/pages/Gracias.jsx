import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import GraciasLoco from '../component/GraciasLoco';
import Footer from '../component/Footer';

export default function Gracias(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte

    return(
        <div>
            <Navbaralt />
            <GraciasLoco />
            <Footer />
        </div>
    )
}