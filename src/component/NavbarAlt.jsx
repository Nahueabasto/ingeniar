import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Imagen from "../img/ingeniar.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Navbaralt.css";


const Navbaralt = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 100) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "heade heade-bg" : "heade"}>
      <Link to="/">
        <h1>Ingeniar</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li>
          <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
        </li>
        <li>
          <Link to="/servicios" onClick={handleClick}>Servicios</Link>
        </li>
        <li>
          <Link to="/clientes" onClick={handleClick}>Clientes</Link>
        </li>
        <li>
          <Link to="/contacto" onClick={handleClick}>Contacto</Link>
        </li>
      </ul>
      <div className="icons">
      <div className="location">
        <WhatsAppIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        <div className="location">
        <FacebookIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
        <div className="location">
        <InstagramIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
        <div className="location">
        <LinkedInIcon
          className="mui"
          size={20}
          style={{ color: "#fff", fontSize: "large", marginRight: "1rem" }}
        />
        </div>
      </div>

      </div>
      
      <div className="hamburguer" onClick={handleClick}>
        {click ? (
          <CloseIcon size={30} style={{ color: "#fff" }} />
        ) : (
          <MenuIcon size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbaralt;