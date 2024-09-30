import React from 'react';
import '../drop-footer/drop.css';
import { useState, useRef } from 'react';

const Eventos = () => {
  const [open, setOpen] = useState (false);

  // const menuRef = useRef();
  // const buttonRef = useRef();
  // window.addEventListener('click', (e) =>{
  //   if(e.target !== menuRef.current && e.target !== buttonRef.current){
  //     setOpen(false)
  //   };
  // })
  
  return (
    <>
    <div onClick={() => setOpen (!open)} className="dropdown">
        <div  className="content">
            <p>Eventos anteriores</p>
        </div>
    </div>
    
    {open &&
    <>

        <div className="menu">
            <a onClick={() => setOpen (false)} href="">Versión 2017</a>
            <a onClick={() => setOpen (false)} href="">Versión 2019</a>
            <a onClick={() => setOpen (false)} href="">Versión 2021</a>
            <a onClick={() => setOpen (false)} href="">Versión 2023</a>
        </div>
        </>
        }

    </>

  );
}

export default Eventos;

