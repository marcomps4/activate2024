import '../Programa/programa.css';
import { CiEdit } from "react-icons/ci";
import programa1 from '../../Assets/ponentes/ponente_1.jpg';
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



const Programa = () =>{

  const ponentes = [
    {
      id:1,
      time: '9:45 AM',
      img_ponente: ponenteJuan,
      title_ponencia: 'Ponencia: I.A en la docencia: eficiencia y excelencia',
      nombre: 'Juan Felipe Samudio Sánchez',
      ponencia: 'Apropiación de I.A. para optimizar el tiempo administrativo de los docentes',
      streaming: 'https://www.eventbrite.co/e/1033708057627?aff=oddtdtcreator'
    },
    {
      id:2,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: dianaDiego,
      title_ponencia: 'Taller: Abispate: aprendizaje basado en proyectos',
      nombre: 'Diana Marcela Suarez Hernandez y Diego Alexander Rivera Aranda',
      ponencia: '',
      streaming: 'https://www.eventbrite.co/e/1029989334827?aff=oddtdtcreator'
    },
    {
      id:3,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: jennyCamilo,
      title_ponencia: 'Taller: Aulas Hibridas',
      nombre: 'Jenny Milena Pinzon Moreno y Camilo Esteban Moreno Andrade',
      ponencia: 'Aula híbrida: ideas innovadoras en mentes creativas',
      streaming: 'https://www.eventbrite.co/e/1030008361737?aff=oddtdtcreator'
    },
    {
      id:4,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: rosmery,
      title_ponencia: 'Taller: Vinculando la teoría con la práctica',
      nombre: 'Rosmery Velosa Esparza',
      ponencia: 'Educando de manera integral para la vida',
      streaming: 'https://www.eventbrite.co/e/1030014329587?aff=oddtdtcreator'
    },
    {
      id:5,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: magda,
      title_ponencia: 'Taller: Potencia tu clase con herramientas I.A',
      nombre: 'Magda Lucia Veloza serrato ',
      ponencia: 'Innovando el aula: I.A como aliada pedagógica',
      streaming: 'https://www.eventbrite.co/e/1030020036657?aff=oddtdtcreator'
    },
    {
      id:6,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: magdaAlembert,
      title_ponencia: 'Taller: Hackatic para la creación de innovación didáctica',
      nombre: 'Magda Juliana Murcia Quevedo y Alembert Armando Mayorga Contreras',
      ponencia: 'El uso intencionado de la tecnología en el aula para hacer un mundo mejor',
      streaming: 'https://www.eventbrite.co/e/1030025222167?aff=oddtdtcreator'
    },
    {
      id:6,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: wilmer,
      title_ponencia: 'Taller: Gestión innovativa de procesos orientada en el PHVA',
      nombre: 'Wilmer Rincon Montañez',
      ponencia: 'Atrévete a innovar con PHVA, donde cada proceso es una gran oportunidad',
      streaming: 'https://www.eventbrite.co/e/1030033757697?aff=oddtdtcreator'
    },
    {
      id:7,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: diana,
      title_ponencia: 'Taller: Comunicación digital',
      nombre: 'Diana Elizabeth Ruiz Herrera',
      ponencia: 'Herramientas que enseñan',
      streaming: 'https://www.eventbrite.co/e/1030037749637?aff=oddtdtcreator'
    },
    {
      id:8,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: diegoCotrino,
      title_ponencia: 'Taller: Este dedito',
      nombre: 'Paulo Cesar Cotrino Sossa y Diego Alexander Rivera Aranda',
      ponencia: 'La colaboración un aprendizaje en acción ',
      streaming: 'https://www.eventbrite.co/e/1030044269137?aff=oddtdtcreator'
    },
    {
      id:9,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: victor,
      title_ponencia: 'Taller: Herramientas para la participación estudiantil',
      nombre: 'Victor Hugo Giraldo Lopez',
      ponencia: '¡1,2,3 al aula otra vez!',
      streaming: 'https://www.eventbrite.co/e/1030058712337?aff=oddtdtcreator'
    },
    {
      id:10,
      time: '11:00 AM',
      time1: '8:00 PM',
      img_ponente: rafael,
      title_ponencia: 'Taller: Desata tu ingenio',
      nombre: 'Rafael Ángel Montoya Gutiérrez',
      ponencia: 'Potencia el aprendizaje con Gemini y Google Colab',
      streaming: 'https://www.eventbrite.co/e/1033764777277?aff=oddtdtcreator'
    },
  ]



  return(
        <section id='programa'>
            <div className="container ">
              <div className='programa'>
                              
            <div className="section-tittle">
                    <h2>Agenda del evento</h2>
                </div>

                <div  className="agenda">
                    <div className="agenda-item">
                      <div className="time"><time>8:30 AM</time></div>
                      <div className="container-ponente">
                      <div className="ponente">
                      <img src={programa1} alt="ponente1"/>
                      </div>
                      <div className='info-ponencia'>
                      <h4>Apertura de registro e ingreso</h4>
                      </div>
                      </div>
                    </div>
                  </div>

                  <div  className="agenda">
                    <div className="agenda-item">
                      <div className="time"><time>9:00 AM</time></div>
                      <div className="container-ponente">
                      <div className="ponente">
                      <img src={programa1} alt="ponente1"/>
                      </div>
                      <div className='info-ponencia'>
                      <h4>Apertura del evento por parte de la dirección de virtualidad</h4>
                      </div>
                      </div>
                    </div>
                  </div>
              {
              ponentes.map(({id, time, time1, img_ponente, title_ponencia, nombre, ponencia, streaming}) =>{
                return(
                  <div className="agenda">
                    <div key={id}  className="agenda-item">
                      <div className="time"><time>{time}</time> <br/><time>{time1}</time></div>
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
                      <button><a href={streaming} target="_blank">Regístrate <CiEdit size={25} /></a></button>
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