import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';
import FormularioEmail from '../component/FormularioEmail';

export default function Contacto(){

    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Navbaralt />
           
            <FormularioEmail />
            <Footer />
        </div>
    )
}