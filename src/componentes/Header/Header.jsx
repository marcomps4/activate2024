import '../Header/header.css';
import 'animate.css';
import { CiEdit } from "react-icons/ci";
import blur1 from "../../Assets/blur_bg.png";
import circle1 from "../../Assets/circle_1.png";
import circle2 from "../../Assets/circle_2.png";
import circle3 from "../../Assets/circle_3.png";
import circle4 from "../../Assets/circle_4.png";
import puntos from "../../Assets/puntos.png";
import puntosright from "../../Assets/puntos.png";
import x from "../../Assets/x.png";
import xright from "../../Assets/x.png";

const Header = () =>{
    return(
        <header>
            <div className='container header-container animate__animated animate__fadeIn '>
                <h1><span className='glass'>Innovación</span> tecnológica y científica </h1>
                <h1>enfocada a la <span>pedagogía</span></h1>
                <div className='header-description'>
                <p>Bienvenido a la décima primera edición de Experiencias significativas - Actívate,</p>
                <p>evento pedagógico de la Dirección de Virtualidad de la Universidad ECCI.</p>
                </div>
                <div className='registro animate__animated animate__fadeIn'>
                    <div className='registro-btn'><a href="#programa"><span className='registro-text'>Regístrate al evento</span><span className='registro-icon'><CiEdit size={25} /></span></a></div>
                </div>
            </div>
            <img src={blur1} alt="blur1" className='bg-img '/>
            <img src={circle1} alt="circle1" className='bg-circle1 animate__animated animate__fadeIn'/>
            <img src={circle2} alt="circle2" className='bg-circle2 animate__animated animate__fadeIn'/>
            <img src={circle3} alt="circle3" className='bg-circle3 animate__animated animate__fadeIn'/>
            <img src={circle4} alt="circle4" className='bg-circle4 animate__animated animate__fadeIn'/>
            {/* <img src={puntos} alt="puntos-bg" className='bg-puntos animate__animated animate__fadeIn'/>
            <img src={puntosright} alt="puntos-bg" className='bg-puntosright animate__animated animate__fadeIn'/> */}
            <img src={x} alt="puntos-bg" className='bg-x'/>
            <img src={xright} alt="puntos-bg" className='bg-xright'/>
            
        </header>
   
    )
}

export default Header