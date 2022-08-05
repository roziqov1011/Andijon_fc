import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeaderSlider() {
  return (
    <div className='header-slider'>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdnn21.img.ria.ru/images/155762/03/1557620309_0:788:2047:2323_1920x0_80_0_0_73787b7a66f7ce4850c1bdb9e432d317.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeaderSlider
