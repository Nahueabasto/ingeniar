import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//import Footer from "../Component/Footer";
import "./FormularioEmail.css";

const FormularioEmail = () => {

  const form = useRef();
  //const history = useHistory(); // Initialize the history object

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_549k4lj', 'template_z1xl3y8', form.current, 'RvQUzDzL-207noaP1')
      .then((result) => {
        console.log(result.text);

        // Check if the email was sent successfully
        if (result.status === 200) {
          // Redirect to the "Thank You" page or any other route you prefer
          //history.push("/gracias");
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
    <div className="formulario">
      <form ref={form} action="" onSubmit={handleSubmit}>
        <div class="header-contact">
          <div class="field">
            <label className="symbol-requiered name" htmlFor="">
              Nombre
            </label>
            <input name="user_name" type="text" placeholder="Nombre" required />
          </div>

          <div class="field">
            <label className="symbol-requiered" htmlFor="">
              Email
            </label>
            <input name="user_email" type="email" placeholder="email@correo.com" id="email" required />
          </div>

          <div class="field">
            <label className="symbol-requiered" htmlFor="">
              Mensaje
            </label>
            <textarea maxLength="500" placeholder="Dejanos tu consulta" name="message" id="message" rows="5" required></textarea>
          </div>
          <button className="btn-send">Enviar</button>
        </div>
      </form>
    </div>
  </div>
);
}
     
 
export default FormularioEmail;