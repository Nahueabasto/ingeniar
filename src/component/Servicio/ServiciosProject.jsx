import React from "react";
import ServiciosCard from "./ServiciosCard";
import ServicioData from "./ServicioData";
//import "./CardProject.css";


const ServicosProject = () => {
  return (
    <div className="CardProduct-container">
      {/* <h2 className="project-heading">MY PROJECTS</h2> */}
      {/* <p className="project-p">Alquiler temporario de casas amoblados y equipados para una confortable estadía en la ciudad de Tanti Córdoba.</p> */}
      <div className="project-containerr">
        {ServicioData.map((val, ind) => {
          return (
            <ServiciosCard
              id={val.id}
              key={ind}
              imgsr={val.imgsr}
              titulo={val.titulo}
              descripcion={val.descripcion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicosProject;