import React from "react";
import { Link } from "react-router-dom";
import "./ServiciosCard.css";

const ServiciosCard = (props) => {
  const primeraImagen = props.imgsr[0];
  console.log("ID capturado en Card:", props.id); // Agrega este console.log

  return (
    <div className="project-cardd">
      <img className="imagen" src={primeraImagen} alt="imagen" />
      <p className="project-titlee">{props.titulo}</p>
      <p className="pro-descripcion"> {props.descripcion}
        </p>
    </div>
  );
};

export default ServiciosCard;