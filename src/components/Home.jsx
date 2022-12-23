// Librerias y necesarios
import React from 'react';
import './css/Home.css';

// Imagenes
import fondo from '../assets/fondo.png';
import logo from '../assets/logo.png';
import section1 from '../assets/section1.jpg';
import section2 from '../assets/section2.jpg';
import section3 from '../assets/section3.jpg';
import section4 from '../assets/section4.jpg';

// Componentes
import Footer from './Footer';
import TextContainer from './TextContainer';
import LogoContainer from './ContainerImg';
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className='container-main' id='section0'>
        <img src={fondo} alt="Fondo" className="background_image" />
        <img src={logo} alt="logo" className="logo" />
        <LogoContainer Logo={logo} />
        <TextContainer />
        <Footer text="Diseñado por OneSoftNow" />
      </div>
      <div className='container-main' id='section1'>
        <img src={section1} alt="Fondo" className="background_section" />
        {/* <img src={logo} alt="logo" className="logo-section" /> */}
        {/* <LogoContainer Logo={logo} /> */}
        <p className='text'>portafolio</p>

      </div>
      <div className='container-main' id='section2'>
        <img src={section2} alt="Fondo" className="background_section" />
        {/* <img src={logo} alt="logo" className="logo-section" /> */}
        {/* <LogoContainer Logo={logo} /> */}
        <p className='text'>Contacto</p>

      </div>
      <div className='container-main' id='section3'>
        <img src={section3} alt="Fondo" className="background_section" />
        {/* <img src={logo} alt="logo" className="logo-section" />
        <LogoContainer Logo={logo} /> */}
        <p className='text'>Quienes somos</p>

      </div>
      <div className='container-main' id='section4'>
        <img src={section4} alt="Fondo" className="background_section" />
        {/* <img src={logo} alt="logo" className="logo-section" /> */}
        {/* <LogoContainer Logo={logo} /> */}
        <p className='text'>Ejemplo</p>
      <Footer text="Diseñado por OneSoftNow" />
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
    </div>
  );
};
export default Home;
