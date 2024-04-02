import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';
import ServicesProject from '../component/ServicesProduct/ServicesProject';
import ServicesSlider from '../component/ServicesProduct/ServicesSlider';

export default function Clientes(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div>
            <Navbaralt />
            <ServicesSlider /> 
            <ServicesProject /> 
            <Footer />
        </div>
    )
}