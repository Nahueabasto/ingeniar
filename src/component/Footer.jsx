import React from "react";
import ImagenFooter from "../img/footer.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Imagen from "../img/ingeniar.png";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
      <div className="footer" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ImagenFooter})` }}>

        <div className="container">

      <div className="logotipo">
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
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <WhatsAppIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <FacebookIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
    <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <InstagramIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
  <a
      href=""
      target="_blank" // Esto abre el enlace en una nueva pestaña o ventana
      rel="noopener noreferrer" // Recomendado para seguridad
    >
      <div className="location">
    <LinkedInIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
  </a>
  </div>

  </div>
  <p className="rights">
      &copy; 2024 Ingeniar | All Rights Reserved
    </p>
    
</div>
    )
}