import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';
import ServiciesDetalle from '../component/ServicesProduct/ServicesDetalle';

export default function ClienteDetalle(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div>
            <Navbaralt />
            <ServiciesDetalle />
            <Footer />
        </div>
    )
}