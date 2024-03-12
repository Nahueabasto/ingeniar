

// import React, { useState } from 'react';
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Navbar = () => {

// const [collapsed, setCollapsed] = useState(true)
// const handleClick = () => setClick(!click);

// // const [color, setColor] = useState(false);
// //   const changeColor = () => {
// //     if (window.scrollY >= 100) {
// //       setColor(true);
// //     } else {
// //       setColor(false);
// //     }
// //   };

// //   window.addEventListener("scroll", changeColor);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-white" style={{ height: '90px', position: 'fixed', width: '100%', padding: '2rem', top: 0, zIndex: 1000, background: 'transparent' }} >

//       <div className="container">
//         <Link to="/">
//           <h1>Ingeniar</h1>
//         </Link>
//         <div
//           className='hamburguer'
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
          
//           onClick={() => setCollapsed(!collapsed)}
//         >
//           {collapsed ? ( <MenuIcon size={30} style={{ color: "#f0ecec" }} /> ) : (<CloseIcon size={30} style={{ color: "#f0ecec" }} />
//           )}
//         </div>
//         <div
//           className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
//           id="navbarNav"
//           style={{ height: '100%', flexDirection: 'column' }}
//         >
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link" href="#">Nosotros</a>
//             </li>
//             <li className="nav-item">
//               <Link to="/contacto">About</Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contacto</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Historias</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Imagen from "../img/ingeniar.png";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Navbar.css";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Ingeniar</h1>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Nosotros</Link>
        </li>
        <li>
          <Link to="/contacto">Servicios</Link>
        </li>
        <li>
          <Link to="/contacto">Clientes</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
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

export default Navbar;