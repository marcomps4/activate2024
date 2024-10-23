import '../acerca/acerca.css';
import 'animate.css';
import puntos from "../../Assets/puntos.png";
import puntosright from "../../Assets/puntos.png";
import circle1 from "../../Assets/circle_1.png";
import circle2 from "../../Assets/circle_2.png";
import imgacerca from '../../Assets/acerca/Img_acerca.png';



const Acerca = () =>{
    return(
        <>
        <section id='acerca'>
            <div className="container">
                
                <div className="acerca">

                <div className="section-tittle">
                        <h2>Acerca del evento</h2>
                </div>

                <div className='acerca-info'>
                    <div className='acerca-text'>
                    <p>
                    
                    <b>Actívate 2024</b> es el evento organizado por la Dirección de Virtualidad de la Universidad ECCI, el cual se centra en la innovación pedagógica desde varias áreas; en esta versión el enfoque será el uso de las tecnologías para generar espacios y actividades disruptivas aplicadas en el aula. De esta manera, Actívate busca desafiar las formas convencionales de transmisión del conocimiento, proponiendo una lógica de participación activa y colaborativa. Los asistentes se convierten en coproductores de saberes, interactuando con proyectos y actividades que reflejan y resuelven problemas reales.
                    
                    <br/> <br/>

                    Este evento promueve la creatividad como una herramienta curricular que, junto con la rigurosidad científica y tecnológica, ayuda a generar espacios de aprendizaje dinámico y alineado con las necesidades del aula. El objetivo es ofrecer a los docentes participantes, herramientas y estrategias para gestionar sus aulas desde una perspectiva innovadora, fomentando la creación de experiencias educativas que vayan más allá de lo curricular y evaluativo.

                    <br/> <br/>

                    Actívate tendrá lugar el día 15 de octubre de 2024, en la Sede Crisanto Luque de la Universidad ECCI, en dos jornadas: <b>mañana y noche.</b> Las ponencias y talleres serán el desarrollo central de este evento y los docentes asistentes podrán participar <b>activamente</b> de cada uno de ellos, tanto presencial como virtual, gracias al video streaming que se tendrá disponible.

                    <br/><br/>

                    Es así como este evento se convierte en un espacio de reflexión y diálogo para mejorar la cocreación de conocimientos y potenciar la participación de todos los actores pedagógicos en las actividades propuestas desde el aula.

                    <br/><br/>

                    ¡Activate! Innovación tecnológica y científica enfocada a la pedagogía.
                    </p>
                    <div className='video-capsulas'>

                    <iframe src="https://www.youtube.com/embed/XaSKQpba_xQ?si=sQImOgo7GJSvjDZg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    </div>

                    <div className="acerca-img">
                   <img src={imgacerca} alt="imagen de apoyo" />
                    </div>
                </div>
                <img src={puntos} alt="puntos-bg" className='bg-adorno'/>
                <img src={puntosright} alt="puntos-bg" className='bg-adorno_1'/>
                <img src={circle1} alt="circle1" className='bg-cir1'/>
                <img src={circle2} alt="circle2" className='bg-cir2'/>
                </div>
              

            </div>
            
            

        </section>
        </>

    )
}
export default Acerca