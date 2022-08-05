import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Oyinchilar__data } from '../../data/Oyinchilar';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

class Oyinchilar extends Component {
  state = { 
    data: Oyinchilar__data
   } 
  render() { 
    return (
      <React.Fragment>
        <div className="oyinchilar">
          <div className="container">
            <h1>HAMMA O'YINCHILAR VA XODIMLAR</h1>
            <Swiper
              slidesPerView={2}
              centeredSlides={true}
              breakpoints={{
                10: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
                1440: {
                  slidesPerView: 2,
                },
              }}
              // loop={true}
              navigation={true}
              spaceBetween={0}
              modules={[Navigation]}
              className="Swiper__oyinchilar"
            >
              {this.state.data.map((a)=>{
                return(
                  <SwiperSlide>
                    <div className="oyinchilar__item">
                      <div className="oyinchi__rasmi">
                        <img src={a.img} alt="" />
                      </div>
                      <div className="oyinchi__info">
                        <div className="img__570">
                          <img src={a.img} alt="" />
                        </div>
                        <div>
                          <p className='oyinchi__yoshi'>{a.yosh}</p>
                          <div className='oyinchi__ismi'>
                            <p>{a.ism}</p>
                            <p>{a.familya}</p>
                          </div>
                          <p className='oyinchi__lavozimi'>{a.lavozim}</p>
                        </div>
                        <div className="oyinchi__stat">
                          <div>
                            <p>{a.oyinlari}</p>
                            <span>O'yinlar</span>
                          </div>
                          <div>
                            <p>{a.daqiqasi}</p>
                            <span>Daqiqalar o'ynadi</span>
                          </div>
                          <div>
                            <p>{a.boshladi}</p>
                            <span>Boshladi</span>
                          </div>
                          <div>
                            <p>{a.subof}</p>
                            <span>Sub off</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              
            </Swiper>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Oyinchilar;