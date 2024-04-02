import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./ServicesCard.css";

const ServicesCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const primeraImagen = props.imgsrc[0];

  console.log("ID capturado en Card:", props.id); // Agrega este console.log

  return (
    <div className="project-card" style={{ position: 'relative' }}>
      <Link to={`/serviciosdetalle/${props.id}`} style={{ textDecoration: "none" }}>
      <img
          src={primeraImagen}
          alt="imagen"
          style={{
            width: '350px',
            height: 'auto',
            // opacity: hovered ? 1 : 0.8,
            // transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <p className="project-title" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', padding: '0px', color: 'white', fontSize: '20px', textAlign: 'center', width: '90%' }}>{props.title}</p>
      </Link>
      <div className="pro-details">
        <div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;