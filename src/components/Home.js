import react from 'react'
import "./Home.css"
import fondo from "../assets/fondo.png"

const Home = ({imgSrc}) => { 
    return(
        <div className='background'>
            <img src={fondo} alt="Fondo" className="background_image" />
        </div>
    )
 }
 export default Home