import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Imagen from "../img/ingeniar.png";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
      <div className="footer">
        <div className="container">

        <div>
      <img className="logoeco" src={Imagen} alt="EcoEcho" width="150" height="100" />
      </div>

    <div className="Informacion">
      <h3>INFORMACION</h3>
      <Link to="/information" className="links">
        <p>Quienes somos</p>
      </Link>
      <Link to="/" className="links">
        <p>Preguntas frecuentes</p>
      </Link>
    </div>

    <div className="Contacto">
      <h3>CONTACTO</h3>
      <p>
         +54 998 844 022
      </p>
      <p>
         contacto@ecoecho.com
      </p>
      <p>
        Argentina
      </p>
  
</div>
  
  
  <div className="social-links">
    <Link to="/" className="links">
    <FacebookIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
    </Link>
    <Link to="/" className="links">
      
    </Link>
    <Link to="/" className="links">
      
    </Link>
  </div>



  </div>

  <p className="rights">
      &copy; 2024 Ingeniar | All Rights Reserved
    </p>
</div>


    )
}