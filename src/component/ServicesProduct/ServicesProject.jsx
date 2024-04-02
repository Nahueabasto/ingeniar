import React from "react";
import ServicesCard from "./ServicesCard";
import ServicesData from "./ServicesData";
//import "./CardProject.css";


const ServicesProject = () => {
  return (
    <div className="CardProduct-container">
      {/* <h2 className="project-heading">MY PROJECTS</h2> */}
      {/* <p className="project-p">Alquiler temporario de casas amoblados y equipados para una confortable estadía en la ciudad de Tanti Córdoba.</p> */}
      <div className="project-container">
        {ServicesData.map((val, ind) => {
          return (
            <ServicesCard
              id={val.id}
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesProject;