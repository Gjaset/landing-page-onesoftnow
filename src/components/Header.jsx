import React from 'react';
import { Link } from 'react-scroll';
import '../components/css/Header.css'
const Header = () => {
    return (
            <nav>
                <ul className='header'>
                    <li>
                        <Link
                            activeClass="active"
                            to="section0"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Portafolio
                        </Link>
                    </li>
                    <li> <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Contacto
                    </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            Quienes somos
                        </Link>
                    </li>
                    <li><Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Ejemplo
                    </Link>
                    </li>
                </ul>
            </nav>
    )
}
export default Header