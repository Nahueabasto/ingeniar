import React from "react";
import Nahuel from "../img/nahuel.png"; 
import "./Equipment.css";


const Equipment = () => {
  const groupMembers = [
    {
      id: 1,
      name: "MARINA PAULA RAMOS LANDA",
      image: Nahuel,
      description: "Arquitecta"
    },
    {
      id: 2,
      name: "TATIANA GOYA TARNAVASSA",
      image: Nahuel,
      description: "Estudiante ing. Civil"
    },
    {
      id: 3,
      name: "LEANDRO DOME",
      image: Nahuel,
      description: "Ing. Civil"
    }
  ];

  return (
    <div className="equipe">
  <h1 className="title">El equipo</h1>
  <div className="group-container">
    {groupMembers.map(member => (
      <div key={member.id} className="member">
        <img src={member.image} alt={member.name} className="member-image" />
        <p className="member-name">{member.name}</p>
        <p className="member-description">{member.description}</p>
      </div>
    ))}
  </div>
  <div className="subtitle-container">
    <p>Un Equipo, Un Objetivo</p>
    <p className="subtitle"> 
    La colaboracion es el centro de nuestro trabajo. Fomentamos un entorno de apoyo, donde las ideas fluyen libremente y el trabajo en equipo prospera. Juntos, superamos obstaculos, celebramos logros y creamos una cultura de trabajo positiva.
    Y esta filosofia intentamos trasladarla al trabajo diario con nuestros clientes.
    </p>
  </div>
</div>

  );
};

export default Equipment;