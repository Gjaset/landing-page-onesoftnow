import React from "react";
import "./Home.css";
import fondo from "../assets/fondo.png";
import logo from "../assets/logo.png";

const Home = ({ imgSrc }) => {
  return (
    <div>
      <div className="background">
      <h1 className="text">Si tu lo sueñas, nosotros lo programamos.</h1>
      {/* <img src={logo} alt="logo" className="logo" /> */}
        <img src={fondo} alt="Fondo" className="background_image" />
      </div>
    </div>
  );
};
export default Home;
