import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from 'swiper/modules';
import { getSwiperDataError, getSwiperDataStart, getSwiperDataSuccess } from '../../redux/action/get_action';
import { connect } from 'react-redux';
import { getSwiperData } from '../../redux/Api/project_api';

SwiperCore.use([Pagination, Navigation]);

const Component4 = ({ dispatch, swiperData, loading, error }) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(getSwiperDataStart());
    try {
      const dataget = await getSwiperData();
      console.log("Data received from API:", dataget);
      dispatch(getSwiperDataSuccess(dataget));
      const innerdata = JSON.stringify(dataget);
      localStorage.setItem('images', innerdata);
    } catch (error) {
      dispatch(getSwiperDataError(error));
      console.error("Error fetching data:", error);
    }
  };
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="mySwiper container-fluid" style={{ background: '#bae8d4' }}>
      <h1 className="text-center fw-medium mt-4" style={{ color: "#013609" }}>Our Products</h1>
      <p className="text-center">For more than 25 years, Magnolia Bakery has been making America’s favorite baked goods the old-
        <br />fashioned way: from scratch, in small batches, and using the finest ingredients.</p>
      <h6 className="text-center text-decoration-underline">VIEW MORE</h6>

      {loading && <img src='./assets/images/Spinner-3.gif'/>}
      {error && <p>Error: ERROR</p>}

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
        { swiperData.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='container mt-2 py-5'>
              <div className=''>
                <img src={image.src} alt={`Slide ${index + 1}`} className='swiper-slide' />
                <div className='card-body text-center'>
                  <h5 className='text-dark'>BestSeller</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-swiper-button-prev ccprev"><i className="fa-solid fa-chevron-left"></i></div>
        <div className="custom-swiper-button-next ccnxt"><i className="fa-solid fa-chevron-right"></i></div>
      </Swiper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  swiperData: state.getswiperdatainformation.swiperData,
  loading: state.getswiperdatainformation.loading,
  error: state.getswiperdatainformation.error,
});

export default connect(mapStateToProps)(Component4);
