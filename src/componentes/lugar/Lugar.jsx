import '../lugar/lugar.css';
import crisanto from '../../Assets/lugar/sede-crisanto.png';
import crisanto1 from '../../Assets/lugar/Crisanto_luque1.png';
import crisanto2 from '../../Assets/lugar/crisanto_luque2.jpg';

const Lugar = () =>{
    return(
        <section id='lugar'>
            <div className="container">
                <div className="lugar">
                <div className="section-tittle">
                    <h2>Lugar del evento</h2>

                    <p>
                    El evento se realizará de manera presencial en la sede Crisanto Luque de la Universidad ECCI y se transmitirá en nuestro canal de YouTube @EDUCADIGITAL_


                    </p>
                </div>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9251725975214!2d-74.07592582372214!3d4.607417542456484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f999f6f39dac1%3A0xf4fe3a95d5eb06e7!2sUniversidad%20ECCI-%20Crisanto%20Luque!5e0!3m2!1ses!2sco!4v1725997554235!5m2!1ses!2sco" AllowFullScreen="" Loading="lazy" ReferrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='fotos'>
                    <img className='foto1' src={crisanto} alt="sede crisanto luque" />
                    <div className='galery'>
                    <img className='foto2' src={crisanto1} alt="sede crisanto luque" />
                    <img className='foto3' src={crisanto2} alt="sede crisanto luque" />
                    </div>
                </div>
                </div>
                </div>

            </div>

        </section>

    )

}

export default Lugar