import React, { Fragment } from 'react';
import './css/Home.css';
import fondo from '../assets/fondo.png';
import logo from '../assets/logo.png';
import Footer from './Footer';

const Home = ({ imgSrc }) => {
  return (
    <Fragment>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="text">Si tu lo sueñas, nosotros lo programamos.</h1>
        <h2 className="textsub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          urna nunc, auctor id interdum ut, gravida quis ligula. Sed vitae urna
          condimentum, euismod dolor ut, faucibus erat. Etiam luctus semper
          consectetur. Curabitur viverra aliquet felis, sit amet laoreet velit
          tristique ac. Fusce facilisis interdum metus quis aliquet. Ut pretium
          orci eget leo dignissim congue.
        </h2>
        <img src={fondo} alt="Fondo" className="background_image" />
        <Footer text="Diseñado por OneSoftNow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"/>
    </div>
    </Fragment>
  );
};
export default Home;
