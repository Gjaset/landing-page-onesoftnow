import React from 'react';
import '../css/Notfound.css';
import fondo from '../../assets/fondo.png';
import { Link } from 'react-router-dom';
export default function Notfoun() {
  return (
    <div className="container_notfound">
      <h1 className="text_notfound flicker">Ups, Pagina no encontrada :(</h1>
      <Link to="/" className="back">
        Vuelve a inicio
      </Link>
      <img src={fondo} alt="Fondo" className="background_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"/>
    </div>
  );
}
