import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import ServicesData from './ServicesData';
import "./ServicesDetalle.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useSwipeable } from 'react-swipeable';
//import Swipeable from 'react-swipeable';

const ServiciesDetalle = () => {
  const { id } = useParams();
  // const [zoom, setZoom] = useState(1);
  const [imagenActual, setImagenActual] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const casa = ServicesData.find((casa) => casa.id === Number(id));


  const cambiarImagen = (direccion) => {
    if (direccion === "prev") {
      if (imagenActual > 0) {
        setImagenActual(imagenActual - 1);
      } else {
        setImagenActual(casa.imgsrc.length - 1);
      }
    } else if (direccion === "next") {
      if (imagenActual < casa.imgsrc.length - 1) {
        setImagenActual(imagenActual + 1);
      } else {
        setImagenActual(0);
      }
    }
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const irImagenAnterior = () => {
    setImagenActual((imagenActual - 1 + casa.imgsrc.length) % casa.imgsrc.length);
  };

  const irImagenSiguiente = () => {
    setImagenActual((imagenActual + 1) % casa.imgsrc.length);
  };

  const handleClickModal = (e) => {
    if (e.target.classList.contains('modal-background')) {
      cerrarModal();
    }
  };

  useEffect(() => {
    const handleKeyboardNavigation = (event) => {
       if (modalVisible) {
         if (event.key === 'Escape') {
           cerrarModal();
         } else if (event.key === 'ArrowLeft') {
           irImagenAnterior();
         } else if (event.key === 'ArrowRight') {
           irImagenSiguiente();
         }
       }
    };
   
    window.addEventListener('keydown', handleKeyboardNavigation);
   
    return () => {
       window.removeEventListener('keydown', handleKeyboardNavigation);
    };
   }, [modalVisible, imagenActual]);

  /////////////////////////////////////////////
  const handlers = useSwipeable({
    onSwipedLeft: () => cambiarImagen('next'),
    onSwipedRight: () => cambiarImagen('prev'),
  });

  const handlersForModal = useSwipeable({
    onSwipedLeft: irImagenSiguiente,
    onSwipedRight: irImagenAnterior,
  });

  return (
    <div className="detalle-f">
      <div className="pepe">
        <h3>{casa.title}</h3>
      <p>{casa.text}</p>
    </div>
    <div className="imagenes-container" style={{ position: 'relative' }} {...handlers}>
  <div className="slider-container">
    <div className="image-counte">
      {`${imagenActual + 1}/${casa.imgsrc.length}`}
    </div>
    <div className="leftArrow" onClick={() => cambiarImagen('prev')}>
      <ArrowBackIosNewIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
    </div>
    <div className="rightArrow" onClick={() => cambiarImagen('next')}>
      <ArrowForwardIosIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
    </div>
    
    {casa.imgsrc.map((item, idx) => (
  <li
    key={idx} // Usando idx como clave única
    style={{ display: idx === imagenActual ? 'block' : 'none' }}
  >
    <img
      src={item}
      alt={`Imagen ${idx + 1}`}
      onClick={abrirModal}
    />
  </li>  
      ))}
    
    <div className="dot-container">
      {casa.imgsrc.map((_, idx) => (
        <div
          key={idx}
          className={`dot-container-item ${idx === imagenActual ? 'active' : ''}`}
          onClick={() => setImagenActual(idx)}
        >
          &#9865;
        </div>
      ))}
    </div>
  </div>
</div>

  {modalVisible && (
  <div className="modal-background" onClick={handleClickModal} {...handlersForModal}>
    {/* Botones para cambiar de imagen */}
    <div className="modal-arrow modal-arrow-left" onClick={irImagenAnterior}>
      <ArrowBackIosNewIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
    </div>
    <div className="modal-arrow modal-arrow-right" onClick={irImagenSiguiente}>
      <ArrowForwardIosIcon size={50} style={{ color: "#d6d2d2", fontSize: "large" }} />
    </div>
    {/* Números de la imagen */}
    <div className="image-counter">
      {`${imagenActual + 1}/${casa.imgsrc.length}`}
    </div>
    {/* Botón para cerrar el modal */}
    <div className="modal-close" onClick={cerrarModal}>
      <CloseIcon size={50} style={{ color: "#d6d2d2" }} />
    </div>
    {/* Imagen actual */}
    <img className='imagen-modal'
      src={casa.imgsrc[imagenActual]}
      alt={`Imagen ${imagenActual + 1}`}
    />
  </div>
)}
  </div>
  );
};

export default ServiciesDetalle;