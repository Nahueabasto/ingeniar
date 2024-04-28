import React, { useEffect } from 'react';
import Navbaralt from '../component/NavbarAlt';
import Footer from '../component/Footer';
import Equipment from '../component/Equipment';
import Mission from '../component/Mission';

export default function Nosotros(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <Navbaralt /> 
            <Equipment />
            <Mission />
            <Footer />
        </div>
    )
}