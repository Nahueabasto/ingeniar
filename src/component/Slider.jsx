import React, { useState, useEffect } from "react";
import Imagen from "../img/react.png";
import image1 from "../img/ing.png";
import image2 from "../img/ing1.png";
import image3 from "../img/ing2.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  }; // Para calcular el index resta 1 del current index, le suma el largo total del array y calcula el resto dividiendo el index por la longitud de todo el array - de modo que si el index es cero y vas para atrás, vuelvas al 3. Es una "wrap-around logic".

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };  //lo mismo pero sumando.



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
      </div>
      <div className="slide-controls">
        <div className="slide-control prev" onClick={handlePrev}>
            <ArrowBackIosNewIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
          </div>
        <div className="slide-control next" onClick={handleNext}>
            <ArrowForwardIosIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
          </div>
      </div>
    </div>
  );
};

export default Slider;

//arrow mas grande para el slider, para las flechas. ver como mejorar las imagenes para que queden mas nitidas y ver que agregar en el home, que mas agregar
//luego ver la sesion de servicios, ver como armar la estructura
//luego ver la sesion de clientres, ver como armar la estructura.-