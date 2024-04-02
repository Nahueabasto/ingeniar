import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ServicesCard.css";


  const ServicesCard = (props) => {
    const [hovered, setHovered] = useState(false);
    const primeraImagen = props.imgsrc[0];
  
    return (
      <div className="project-card" style={{ position: 'relative' }}>
        <Link to={`/serviciosdetalle/${props.id}`} style={{ textDecoration: "none" }}>
          <img
            src={primeraImagen}
            alt="imagen"
            style={{
              width: '350px',
              height: 'auto',
              opacity: hovered ? 0.3 : 1, // Cambia la opacidad cuando el mouse está encima
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          {hovered && (
            <div // Contenedor del texto con evento onMouseEnter para mantener la opacidad de la imagen
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '0px', color: 'black', fontSize: '20px', textAlign: 'center', width: '90%' }}
            >
              <p className="project-title">{props.title}</p>
            </div>
          )}
        </Link>
        <div className="pro-details">
          <div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesCard;