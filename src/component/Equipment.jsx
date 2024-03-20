import React from "react";
import Nahuel from "../img/nahuel.png"; 
import "./Equipment.css";


const Equipment = () => {
  const groupMembers = [
    {
      id: 1,
      name: "Miembro 1",
      image: Nahuel,
      description: "Descripción del miembro 1"
    },
    {
      id: 2,
      name: "Miembro 2",
      image: Nahuel,
      description: "Descripción del miembro 2"
    },
    {
      id: 3,
      name: "Miembro 3",
      image: Nahuel,
      description: "Descripción del miembro 3"
    }
  ];

  return (
    <div className="group-container">
      {groupMembers.map(member => (
        <div key={member.id} className="member">
          <img src={member.image} alt={member.name} className="member-image" />
          <p className="member-name">{member.name}</p>
          <p className="member-description">{member.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Equipment;