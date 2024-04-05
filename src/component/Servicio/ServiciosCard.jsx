import React from "react";
import { Link } from "react-router-dom";
import "./ServiciosCard.css";

const ServiciosCard = (props) => {
  const primeraImagen = props.imgsr[0];
  console.log("ID capturado en Card:", props.id); // Agrega este console.log

  return (
    <div className="project-cardd">
      <img src={primeraImagen} alt="imagen" />
      <h2 className="project-titlee">{props.titulo}</h2>
      <div className="pro-detailss">
        {/* <p>{props.text}</p> */}
        <div>
          {/* <Link to={`/casa/${props.id}`} style={{ textDecoration: "none" }}> */}
            <button className="secondary-button">
              {props.descripcion}
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ServiciosCard;