import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide_image_1 from './assets/Images/img_1.jpg';
import slide_image_2 from './assets/Images/img_2.jpg';
import slide_image_3 from './assets/Images/img_3.jpg';
import slide_image_4 from './assets/Images/img_4.jpg';
import slide_image_5 from './assets/Images/img_5.jpg';

function App() {
  return (
    <div className="container">
      <h1 className="heading">
        <span className="trending">Trending</span><br />
        <span className="projects">Projects</span>
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <div className="slide-content">
            <h2>White Land Urban Resort</h2>
            <p>Location: Sector 126, Gurgaon</p>
            <button className="button">Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
          <div className="slide-content">
            <h2>White Land Urban Resort</h2>
            <p>Location: Sector 126, Gurgaon</p>
            <button className="button">Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
          <div className="slide-content">
            <h2>White Land Urban Resort</h2>
            <p>Location: Sector 126, Gurgaon</p>
            <button className="button">Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
          <div className="slide-content">
            <h2>White Land Urban Resort</h2>
            <p>Location: Sector 126, Gurgaon</p>
            <button className="button">Explore</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
          <div className="slide-content">
            <h2>White Land Urban Resort</h2>
            <p>Location: Sector 126, Gurgaon</p>
            <button className="button">Explore</button>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
