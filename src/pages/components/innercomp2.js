import REACT from 'react';
import React from 'react';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
 import { getSwiperData1Error, getSwiperData1Start, getSwiperData1Success } from '../../redux/action/get_action';
import { connect } from 'react-redux';
 import { getSwiperData1 } from '../../redux/Api/project_api';


SwiperCore.use([Pagination, Navigation]);
const Innercomp2=({ dispatch, swiperData1,loading,error })=>{
    const [swiperRef, setSwiperRef] = useState(null);
  

    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      dispatch(getSwiperData1Start());
      try {
        const dataget = await getSwiperData1();
        console.log("this is swiperdata1-->",dataget)
        dispatch(getSwiperData1Success(dataget));
      } catch (error) {
        dispatch(getSwiperData1Error(error));
      }
    };

    console.log('this is data I got',swiperData1)
   
    return(
      <>
           <div className="mySwiper container-fluid p-4 mt-5"style={{background:'#bae8d4'}}>
        <h1 className="text-center fw-medium   " style={{color:"#013609"}}>You May Also Like..</h1>
                 <h6 className="text-center text-decoration-underline ">VIEW MORE</h6>
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
              slidesPerView: 2,
            },

            769: {
              slidesPerView: 3,
            },
  
            
            1025: {
              slidesPerView: 4,
            },
          }}
      >
     {loading && <img src='./assets/images/Spinner-3.gif'/>}
      {error && <p>Error: ERROR</p>}

        {swiperData1.map((item, index) => (
          <SwiperSlide key={index}>
           <div className='container mt-2 py-5'>
            <div className='card-content'>
                <img src={item.src} alt={`Slide ${index + 1}`} className='swiper-slide  '/>
                <div className='card-body text-center'>
                <div className="" style={{color: "#013609"}}>
                                <h6 className="card-title text-center p-2" style={{background:'#f5faf6',}} >SHIPPING ONLY</h6>
                                <h5 className='text-start mt-4'>Banana Pudding Lover's Sample Pack</h5>
                                <p className='text-start'>For all devoted banana pudding lovers out ,there we have created.</p>
                                <p className='text-start'>Starting at $81.00</p>
                            </div>
                </div>
            </div>
        </div>

          </SwiperSlide>
          
        ))}
         <div className="custom-swiper-button-prev inprev"><i class="fa-solid fa-chevron-left"></i></div>
          <div className="custom-swiper-button-next innxt"><i class="fa-solid fa-chevron-right"></i></div>
      </Swiper>
    </div>
      </>
    )
}
const mapStateToProps = (state) => (
  {
  swiperData1: state.getswiperdata2information.swiperData1,
  loading: state.getswiperdata2information.loading,
  error: state.getswiperdata2information.error,
});

export default connect(mapStateToProps)(Innercomp2);
