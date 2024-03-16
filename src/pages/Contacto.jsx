import React from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Phrase from '../component/Pharse';
import FormularioEmail from '../component/FormularioEmail';

export default function Contacto(){
    return(
        <div>
            <Navbaralt />
           
            <FormularioEmail />
            <Footer />
        </div>
    )
}