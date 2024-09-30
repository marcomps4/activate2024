import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../ponentes/ponentes.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import taller1 from '../../Assets/ponentes/taller1.png';
import taller2 from '../../Assets/ponentes/taller2.png';
import taller3 from '../../Assets/ponentes/taller3.png';
import taller4 from '../../Assets/ponentes/taller4.png';
import taller5 from '../../Assets/ponentes/taller5.png';
import taller6 from '../../Assets/ponentes/taller6.png';
import taller7 from '../../Assets/ponentes/taller7.png';
import taller8 from '../../Assets/ponentes/taller8.png';
import ponencia1 from '../../Assets/ponentes/ponencia1.png';
import ponencia2 from '../../Assets/ponentes/ponencia2.png';
import ponencia3 from '../../Assets/ponentes/ponencia3.png';
import bg_ponentes from '../../Assets/blur3_bg.png';
import x from "../../Assets/x.png";
import x_left from "../../Assets/x.png";



const Ponentes = () =>{
    return(
        <>
        <section id='ponentes'>
            <div className="container">
                <div className="ponentes">
                <div className="section-tittle">
                        <h2>Ponentes del evento</h2>
                </div>
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                    rotate: -1,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }
                }
                // pagination={{el:'.swiper-pagination', clickable:true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
                >
                    <SwiperSlide>
                        <img src={taller1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller6} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller7} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={taller8} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ponencia1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ponencia2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ponencia3} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                       <div className='swiper-button-prev slide-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                        </div> 
                        <div className='swiper-button-next slide-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div> 

                        <div className='swiper-pagination'></div> 

                    </div>

                </Swiper>
                <img src={bg_ponentes} alt="circle1" className='bg-blur'/>
                <img src={x} alt="puntos-bg" className='bg-x'/>
                <img src={x_left} alt="puntos-bg" className='bg-x1'/>


                </div>
                
            </div>
        </section>
        </>

    )
}

export default Ponentes
