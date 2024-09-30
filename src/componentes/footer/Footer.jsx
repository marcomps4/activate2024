import '../footer/footer.css';
import logoEcci from '../../Assets/logo_ecci-icontec.png';
import { PiBooks } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import Eventos from '../../componentes/drop-footer/DropDown';

const Footer = () =>{
    return(
        <section>
        <footer >
        <div className='container'>
        <div className='footer'>
            <div className="logo-ecci"><img src={logoEcci} alt="logo-ecci" />
                {/* <h4>Carrera 19 No. 49 – 20</h4>
                <h4>Sede Principal</h4>
                <h4>Bogotá, Colombia</h4> */}
                </div>

            <div className='info-ecci'>
                
                <div className="memorias-button">
                <button><a href="https://www.ecci.edu.co//memorias-evento/" target="_blank"><span>Memorias</span> <PiBooks size={20}/></a></button>
                </div>
            </div>

            <div>
                <Eventos/>
            </div>


            <div className='social-icons'>
            <a className='social-button' href="https://www.facebook.com/AulasECCI?mibextid=ZbWKwL" target="_blank"><SlSocialFacebook  size={22}/></a>
            <a className='social-button' href="https://instagram.com/ecci_virtual?igshid=MWZjMTM2ODFkZg==" target="_blank"><SlSocialInstagram size={22}/></a>
            <a className='social-button' href="https://www.youtube.com/@EDUCADIGITAL_/featured" target="_blank"><SlSocialYoutube size={22}/></a>
            </div>
            </div>
            
        </div>
        <div className="footer_copy">
            <small>&copy; Copyright Dirección de virtualidad</small>
            <small>Derechos Reservados 2024</small>
             </div>
       
        </footer>
        </section>
         
    )
        
}

export default Footer