import { useState } from "react";
import '../Nav/Nav.css';
import Burguer from'../Burger-btn/BurguerBtn';
import 'animate.css';
import logo from '../../Assets/logo_blanco.png';
import { CiStreamOn } from "react-icons/ci";
// import logo from '../img/logo.svg';
// import {CiStreamOn} from "react-icons/ci";




const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavClick = (hash) => {
    setActiveNav(hash);
    setClicked(false);
  };

  return (

      <div className="Nav-bar">
      <div className="logo-nav">
        <a href='#' onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>
          <img src={logo} alt="logo" />
        </a>
      </div>

      <nav className={`navitems ${clicked ? 'active' : ''}`}>
        <a href='#acerca' onClick={() => handleNavClick('#acerca')} className={activeNav === '#acerca' ? 'active' : ''}>Acerca de</a>
        <a href='#ponentes' onClick={() => handleNavClick('#ponentes')} className={activeNav === '#ponentes' ? 'active' : ''}>Ponentes</a>
        <a href='#programa' onClick={() => handleNavClick('#programa')} className={activeNav === '#programa' ? 'active' : ''}>Programa</a>
        <a href='#lugar' onClick={() => handleNavClick('#lugar')} className={activeNav === '#lugar' ? 'active' : ''}>Lugar</a>

        <div className="navbar-button">
          <button>
            <a href="#" target="_blank">
              <span>Conéctate</span> <CiStreamOn size={20} />
            </a>
          </button>
        </div>
      </nav>

      <div className="menu-burguer">
        <Burguer clicked={clicked} handleClick={handleClick} />
      </div>

      <div id="bg-mobile" className={`initial ${clicked ? 'active' : ''}`}></div>
      </div>

  );
};

export default NavBar;