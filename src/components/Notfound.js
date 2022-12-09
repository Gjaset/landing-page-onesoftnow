import react from "react";
import "./Home.css";
import fondo from "../assets/fondo.png";
export default function Notfoun() {
  return (
      <div className="background">
        <p className="text">Pagina no encontrada</p>
        <img src={fondo} alt="Fondo" className="background_image" />
      </div>
  );
}
