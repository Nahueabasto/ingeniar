import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Equipment from '../component/Equipment';
export default function Nosotros(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Navbaralt /> 
            <Equipment />
            <Footer />
        </div>
    )
}