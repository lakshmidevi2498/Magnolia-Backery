import React from 'react';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Pagination, Navigation } from 'swiper/modules';
import { connect } from 'react-redux';

SwiperCore.use([Pagination, Navigation]);

const Card2 = () => {
  const [swiperRef, setSwiperRef] = useState(null); 
  const image=localStorage.getItem('images')
  const cardimg=JSON.parse(image)
  
  return (
    <div className="mySwiper container-fluid p-5" style={{ background: '#bae8d4' }}>
      <div className='container'>
        <h1 className="text-center fw-bold mt-3" style={{ color: "#013609" }}>Treats for any Occasions</h1>
        <p className="text-center" style={{ color: "#013609" }}>We’ve got you covered for any holiday, special occasion, or cause for celebration.</p>
        <h6 className="text-center text-decoration-underline fw-bold" style={{ color: "#013609" }}>VIEW MORE</h6>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: '.custom-swiper-button-prev',
            nextEl: '.custom-swiper-button-next',
          }}
          breakpoints={{
            426: {
              slidesPerView: 3,
            },
            769: {
              slidesPerView: 4,
            },
            1025: {
              slidesPerView: 5,
            },
          }}
        >
          {cardimg.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='container mt-2 py-5 card-hover'>
                <div className='card-content'>
                  <img src={image.src} alt={`Slide ${index + 1}`} className='swiper-slide img ' />
                  <div className='card-body text-center mt-3'>
                    <h5 className='text-dark'>Lotsa Chocolate!</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-swiper-button-prev prevbtn"><i className="fa-solid fa-chevron-left"></i></div>
          <div className="custom-swiper-button-next nxtbtn"><i className="fa-solid fa-chevron-right"></i></div>
        </Swiper>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  swiperData: state.getswiperdatainformation.swiperData,
  loading: state.getswiperdatainformation.loading,
  error: state.getswiperdatainformation.error,
});
export default connect(mapStateToProps)(Card2);
