import React, { useState, useEffect } from "react";
import Imagen from "../img/react.png";
import image1 from "../img/ing.png";
import image2 from "../img/ing1.png";
import image3 from "../img/ing2.png";
import "./Slider.css";

const Slider = () => {
  const [slidePictures, setSlidePictures] = useState([
    { image: Imagen, phrase: "Frase 1", url: '/40' },
    { image: image1, phrase: "Frase 2", url: '/32' },
    { image: image2, phrase: "Frase 3", url: '/21' },
    { image: image3, phrase: "Frase 4", url: '/10' }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente slide
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
      );
      // Reiniciar el estado de carga de la imagen
      setImageLoaded(false);
    }, 4000); // Cambiar cada 4 segundos (ajusta según tus necesidades)

    // Limpiar el intervalo cuando el componente se desmonta o el slide cambia
    return () => clearInterval(interval);
  }, [currentSlideIndex, slidePictures]);

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src={slidePictures[currentSlideIndex].image}
          alt="Imagen de computadora"
          onLoad={() => setImageLoaded(true)} // Marcar la imagen como cargada
        />
      </div>
      <div className="content">
        {imageLoaded && (
          <h2>{slidePictures[currentSlideIndex].phrase}</h2>
        )}
        {/* Puedes agregar contenido adicional aquí */}
        {/* Por ejemplo, enlaces */}
        {/* <div>
          <Link to="/proyectos" className="btn">
            PROYECTOS
          </Link>
          <Link to="/contacto" className="btn btn-light">
            MI CURRICULUM
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
