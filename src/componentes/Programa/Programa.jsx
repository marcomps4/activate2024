import React, { useState } from 'react';
import '../Programa/programa.css';
import { CiEdit } from "react-icons/ci";
import { IoCloudyNightOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import ponenteJuan from '../../Assets/miniaturas/juan_felipe.png';
import dianaDiego from '../../Assets/miniaturas/diana_diego.png';
import jennyCamilo from '../../Assets/miniaturas/jenny_camilo.png';
import rosmery from '../../Assets/miniaturas/rosmery.png';
import magda from '../../Assets/miniaturas/magada_serrato.png';
import magdaAlembert from '../../Assets/miniaturas/magda_alembert.png';
import wilmer from '../../Assets/miniaturas/wilmer.png';
import diana from '../../Assets/miniaturas/diana.png';
import diegoCotrino from '../../Assets/miniaturas/diago_cotrino.png';
import victor from '../../Assets/miniaturas/victor.png';
import rafael from '../../Assets/miniaturas/rafael.png';
import ruben from '../../Assets/miniaturas/ruben.png';
import freddylberto from '../../Assets/miniaturas/freddylberto.png';
import registro from '../../Assets/miniaturas/registro.png';
import apertura from '../../Assets/miniaturas/apertura.png';



const Programa = () =>{

  const [activeTab, setActiveTab] = useState('morning'); // Controla la pestaña activa

  const ponentes = [
    {
      id:27,
      time: '8:30 AM',
      img_ponente: registro,
      title_ponencia: 'Registro e ingreso',
      jornada: 'morning',
      showButton: false
    },
    {
      id:23,
      time: '9:00 AM',
      img_ponente: apertura,
      title_ponencia: 'Apertura del evento por parte de la dirección de virtualidad',
      jornada: 'morning',
      showButton: false
    },
    {
      id:1,
      time: '9:45 AM',
      img_ponente: ponenteJuan,
      title_ponencia: 'Ponencia: I.A en la docencia: eficiencia y excelencia',
      nombre: 'Juan Felipe Samudio Sánchez',
      ponencia: 'Apropiación de I.A. para optimizar el tiempo administrativo de los docentes',
      streaming: 'https://www.eventbrite.co/e/1034059689367?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: false
    },
    {
      id:2,
      time: '11:00 AM',
      img_ponente: dianaDiego,
      title_ponencia: 'Taller: ABisPate: aprendizaje basado en proyectos',
      nombre: 'Diana Marcela Suarez Hernandez y Diego Alexander Rivera Aranda',
      ponencia: 'Aprender haciendo: transforma ideas en proyectos',
      streaming: 'https://www.eventbrite.co/e/1029989334827?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:3,
      time: '11:00 AM',
      img_ponente: jennyCamilo,
      title_ponencia: 'Taller: Aulas Hibridas',
      nombre: 'Jenny Milena Pinzon Moreno y Camilo Esteban Moreno Andrade',
      ponencia: 'Aula híbrida: ideas innovadoras en mentes creativas',
      streaming: 'https://www.eventbrite.co/e/1030008361737?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:4,
      time: '11:00 AM',
      img_ponente: rosmery,
      title_ponencia: 'Taller: Vinculando la teoría con la práctica',
      nombre: 'Rosmery Velosa Esparza',
      ponencia: 'Educando de manera integral para la vida',
      streaming: 'https://www.eventbrite.co/e/1030014329587?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:5,
      time: '11:00 AM',
      img_ponente: magda,
      title_ponencia: 'Taller: Potencia tu clase con herramientas I.A',
      nombre: 'Magda Lucia Veloza serrato ',
      ponencia: 'Innovando el aula: I.A como aliada pedagógica',
      streaming: 'https://www.eventbrite.co/e/1030020036657?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:6,
      time: '11:00 AM',
      img_ponente: magdaAlembert,
      title_ponencia: 'Taller: Hackatic para la creación de innovación didáctica',
      nombre: 'Magda Juliana Murcia Quevedo y Alembert Armando Mayorga Contreras',
      ponencia: 'El uso intencionado de la tecnología en el aula para hacer un mundo mejor',
      streaming: 'https://www.eventbrite.co/e/1030025222167?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:7,
      time: '11:00 AM',
      img_ponente: wilmer,
      title_ponencia: 'Taller: Gestión innovativa de procesos orientada en el PHVA',
      nombre: 'Wilmer Rincon Montañez',
      ponencia: 'Atrévete a innovar con PHVA, donde cada proceso es una gran oportunidad',
      streaming: 'https://www.eventbrite.co/e/1030033757697?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:8,
      time: '11:00 AM',
      img_ponente: diana,
      title_ponencia: 'Taller: Comunicación digital',
      nombre: 'Diana Elizabeth Ruiz Herrera',
      ponencia: 'Herramientas que enseñan',
      streaming: 'https://www.eventbrite.co/e/1030037749637?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:9,
      time: '11:00 AM',
      img_ponente: diegoCotrino,
      title_ponencia: 'Taller: Este dedito',
      nombre: 'Paulo Cesar Cotrino Sossa y Diego Alexander Rivera Aranda',
      ponencia: 'La colaboración un aprendizaje en acción ',
      streaming: 'https://www.eventbrite.co/e/1030044269137?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:10,
      time: '11:00 AM',
      img_ponente: victor,
      title_ponencia: 'Taller: Herramientas para la participación estudiantil',
      nombre: 'Victor Hugo Giraldo Lopez',
      ponencia: '¡1,2,3 al aula otra vez!',
      streaming: 'https://www.eventbrite.co/e/1030058712337?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
    },
    {
      id:11,
      time: '11:00 AM',
      img_ponente: rafael,
      title_ponencia: 'Taller: Desata tu ingenio',
      nombre: 'Rafael Ángel Montoya Gutiérrez',
      ponencia: 'Potencia el aprendizaje con Gemini y Google Colab',
      streaming: 'https://www.eventbrite.co/e/1033764777277?aff=oddtdtcreator',
      jornada: 'morning',
      showButton: true
      
    },
    {
      id:23,
      time: '5:00 PM',
      img_ponente: apertura,
      title_ponencia: 'Apertura del evento por parte de la dirección de virtualidad',
      jornada: 'afternoon',
      showButton: false
    },
    {
      id:12,
      time: '5:15 PM',
      img_ponente: ruben,
      title_ponencia: 'Ponencia: Integración de habilidades digitales estratégicas en I.A en la investigación formativa',
      nombre: ' Ruben Dario Cardenas Espinso',
      ponencia: 'Revoluciona tus habilidades digitales estratégicas en investigación con I. A',
      jornada: 'afternoon',
      showButton: false
    },
    {
      id:12,
      time: '6:00 PM',
      img_ponente: freddylberto,
      title_ponencia: 'Ponencia: Enseñando ética, con una mediación virtual.',
      nombre: ' Mario Alejandro Franco Guzman y Freddylberto Caraballo Urrego ',
      ponencia: 'Creando superhéroes y villanos, para la interiorización de una ética aplicada',
      jornada: 'afternoon',
      showButton: false
    },
    {
      id:13,
      time: '7:00 PM',
      img_ponente: dianaDiego,
      title_ponencia: 'Taller: ABisPate: aprendizaje basado en proyectos',
      nombre: 'Diana Marcela Suarez Hernandez y Diego Alexander Rivera Aranda',
      ponencia: 'Aprender haciendo: transforma ideas en proyectos',
      streaming: 'https://www.eventbrite.co/e/1029989334827?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:14,
      time: '7:00 PM',
      img_ponente: jennyCamilo,
      title_ponencia: 'Taller: Aulas Hibridas',
      nombre: 'Jenny Milena Pinzon Moreno y Camilo Esteban Moreno Andrade',
      ponencia: 'Aula híbrida: ideas innovadoras en mentes creativas',
      streaming: 'https://www.eventbrite.co/e/1030008361737?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:15,
      time: '7:00 PM',
      img_ponente: rosmery,
      title_ponencia: 'Taller: Vinculando la teoría con la práctica',
      nombre: 'Rosmery Velosa Esparza',
      ponencia: 'Educando de manera integral para la vida',
      streaming: 'https://www.eventbrite.co/e/1030014329587?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:16,
      time: '7:00 PM',
      img_ponente: magda,
      title_ponencia: 'Taller: Potencia tu clase con herramientas I.A',
      nombre: 'Magda Lucia Veloza serrato ',
      ponencia: 'Innovando el aula: I.A como aliada pedagógica',
      streaming: 'https://www.eventbrite.co/e/1030020036657?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:17,
      time: '7:00 PM',
      img_ponente: magdaAlembert,
      title_ponencia: 'Taller: Hackatic para la creación de innovación didáctica',
      nombre: 'Magda Juliana Murcia Quevedo y Alembert Armando Mayorga Contreras',
      ponencia: 'El uso intencionado de la tecnología en el aula para hacer un mundo mejor',
      streaming: 'https://www.eventbrite.co/e/1030025222167?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:18,
      time: '7:00 PM',
      img_ponente: wilmer,
      title_ponencia: 'Taller: Gestión innovativa de procesos orientada en el PHVA',
      nombre: 'Wilmer Rincon Montañez',
      ponencia: 'Atrévete a innovar con PHVA, donde cada proceso es una gran oportunidad',
      streaming: 'https://www.eventbrite.co/e/1030033757697?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:19,
      time: '7:00 PM',
      img_ponente: diana,
      title_ponencia: 'Taller: Comunicación digital',
      nombre: 'Diana Elizabeth Ruiz Herrera',
      ponencia: 'Herramientas que enseñan',
      streaming: 'https://www.eventbrite.co/e/1030037749637?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:20,
      time: '7:00 PM',
      img_ponente: diegoCotrino,
      title_ponencia: 'Taller: Este dedito',
      nombre: 'Paulo Cesar Cotrino Sossa y Diego Alexander Rivera Aranda',
      ponencia: 'La colaboración un aprendizaje en acción ',
      streaming: 'https://www.eventbrite.co/e/1030044269137?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:21,
      time: '7:00 PM',
      img_ponente: victor,
      title_ponencia: 'Taller: Herramientas para la participación estudiantil',
      nombre: 'Victor Hugo Giraldo Lopez',
      ponencia: '¡1,2,3 al aula otra vez!',
      streaming: 'https://www.eventbrite.co/e/1030058712337?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
    {
      id:22,
      time: '7:00 PM',
      img_ponente: rafael,
      title_ponencia: 'Taller: Desata tu ingenio',
      nombre: 'Rafael Ángel Montoya Gutiérrez',
      ponencia: 'Potencia el aprendizaje con Gemini y Google Colab',
      streaming: 'https://www.eventbrite.co/e/1033764777277?aff=oddtdtcreator',
      jornada: 'afternoon',
      showButton: true
    },
  ]




  return(
        <section id='programa'>
            <div className="container ">
              <div className='programa'>
                              
            <div className="section-tittle">
                    <h2>Agenda del evento</h2>
                </div>

                 {/* Pestañas */}
          <div className="tabs">
            <button
              className={activeTab === 'morning' ? 'active' : ''}
              onClick={() => setActiveTab('morning')}
            >
              Jornada día <IoPartlySunnyOutline size={25} />
            </button>
            <button
              className={activeTab === 'afternoon' ? 'active' : ''}
              onClick={() => setActiveTab('afternoon')}
            >
               Jornada tarde <IoCloudyNightOutline size={25} />
            </button>
          </div>

            

              
    
                              {
              ponentes
              .filter(ponente => ponente.jornada === activeTab) // Filtra según la jornada
              .map(({id, time, img_ponente, title_ponencia, nombre, ponencia, streaming, showButton}) =>{
                return(
                  <div className="agenda">
                    <div key={id}  className="agenda-item">
                      <div className="time"><time>{time}</time></div>
                      <div className="container-ponente">
                      <div className="ponente">
                      <img src={img_ponente} alt="ponente1"/>
                      </div>
                      <div className='info-ponencia'>
                      <h4>{title_ponencia}</h4><span>{nombre}</span>
                      <p>{ponencia}</p>
                      </div>
                      </div>
                      <div className="ponencia-button">
                      {showButton && (
                      <button ><a href={streaming} target="_blank">Regístrate <CiEdit size={25} /></a></button>
                    )}
                      </div>
                    </div>
                  </div>

                )
                
              }
              )
            }


                              
            </div>
            </div>
        </section>
)
}
export default Programa