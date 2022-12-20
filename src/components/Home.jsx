// Librerias y necesarios
import React from 'react';
import './css/Home.css';

// Imagenes
import fondo from '../assets/fondo.png';
import logo from '../assets/logo.png';

// Componentes
import Footer from './Footer';
import TextContainer from './TextContainer';
import LogoContainer from './ContainerImg';

const Home = () => {
  return (
    <div className="container">
      <img src={fondo} alt="Fondo" className="background_image" />
      <img src={logo} alt="logo" className="logo" />
      <LogoContainer Logo={logo} />
      <TextContainer />
      <Footer text="Diseñado por OneSoftNow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"/>
    </div>
  );
};
export default Home;
