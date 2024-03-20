import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//import { useHistory } from 'react-router-dom';
import "./FormularioEmail.css";

const FormularioEmail = () => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false); // Variable de estado para controlar si se ha enviado el formulario

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_549k4lj', 'template_z1xl3y8', form.current, 'RvQUzDzL-207noaP1')
      .then((result) => {
        console.log(result.text);

        if (result.status === 200) {
          setEnviado(true); // Actualiza el estado para indicar que el formulario se ha enviado correctamente
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="heading-container">
        <h2 className="primary-heading">Contacto</h2>
        <p className="primary-headin">Completá los datos y nos contactaremos para asesorarte.</p>
      </div>
      {!enviado ? ( // Renderiza el formulario si no se ha enviado
        <div className="formulario">
          <form ref={form} action="" onSubmit={handleSubmit}>
            <div className="header-contact">
              <div className="field">
                <label className="symbol-requiered name" htmlFor="">
                  Nombre
                </label>
                <input name="user_name" type="text" placeholder="Nombre" required />
              </div>

              <div className="field">
                <label className="symbol-requiered" htmlFor="">
                  Email
                </label>
                <input name="user_email" type="email" placeholder="email@correo.com" id="email" required />
              </div>

              <div className="field">
                <label className="symbol-requiered" htmlFor="">
                  Mensaje
                </label>
                <textarea maxLength="500" placeholder="Dejanos tu consulta" name="message" id="message" rows="5" required></textarea>
              </div>
              <button className="btn-send">Enviar</button>
            </div>
          </form>
        </div>
      ) : ( // Renderiza el mensaje de agradecimiento si el formulario se ha enviado
      <div className="gracias-message-container">
      <div className="gracias-message">
        <p>Recibimos correctamente el formulario. Nos comunicaremos a la brevedad.</p>
      </div>
      </div>
      )}
    </div>
  );
};

export default FormularioEmail;