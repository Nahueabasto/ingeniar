import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Services from '../component/ServicesProduct/Services';
import ServicosProject from '../component/Servicio/ServiciosProject';

export default function Servicios(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Navbaralt />
            <Services /> 
            <ServicosProject />  
            <Footer />
        </div>
    )
}