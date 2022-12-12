import React from "react";
import "./Home.css";
import fondo from "../assets/fondo.png";
export default function Notfoun() {
  return (
    <div>
      <div className="text">
        <p>Pagina no encontrada</p>
      </div>
      <div className="background">
        <img src={fondo} alt="Fondo" className="background_image" />
      </div>
    </div>
  );
}
