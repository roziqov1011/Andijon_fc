import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function SubHeaderSlider() {
    return (
      <div className="container">
          <div className='sub__header-slider'>
        <Swiper
          slidesPerView={5}
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
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide>
          <SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide><SwiperSlide>
           <div className="mySwiper__item-info">
              <h3>Ukrainian refugees face accommodation crisis as supply limits reached</h3>
                <p>
                Cabinet subcommittee meeting today to discuss issue
                </p>
                <span>
                Sun Jun 12 2022 - <br /> 21:59
                </span>
           </div>
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    )
}

export default SubHeaderSlider
