import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 
import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Pagination, Navigation]);

const Aboutcomp4=()=> {
     const [swiperRef, setSwiperRef] = useState(null);

  const images = [
    { src: "./assets/images/cardimg1.webp", h5: "Cup Cakes", },
    { src: "./assets/images/cardimg2.webp", h5: "Brownies&Bars",  },
    { src: "./assets/images/cardimg3.webp", h5: "Cakes", },
    { src: "./assets/images/cardimg4.webp", h5: "Sampler Packs",  },
    { src: "./assets/images/cardimg5.webp", h5: "World Famous-Banana Pudding",  },
    { src: "./assets/images/cardimg1.webp", h5: "Cup Cakes", },
    { src: "./assets/images/cardimg2.webp", h5: "Brownies&Bars",  },
    { src: "./assets/images/cardimg3.webp", h5: "Cakes", },
    { src: "./assets/images/cardimg4.webp", h5: "Sampler Packs",  },
    { src: "./assets/images/cardimg5.webp", h5: "World Famous-Banana Pudding",  },
  ];
  return (
  
    <div className="mySwiper container ">
        <h1 className="text-center fw-medium mt-4 fs-1 " style={{color:"#013609"}}>Our Products</h1>
             <p className="text-center " style={{fontSize:'18px'}}>For more than 25 years, Magnolia Bakery has been making America’s favorite baked goods the old-fashioned way: from scratch, in small batches, and using the finest ingredients. Our assortment includes our fan-favorite cakes and cupcakes, world-famous banana pudding, and a host of other classic baked goods, seasonal treats, and more..</p>
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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
           <div className='container mt-2 py-5'>
            <div className=''>
                <img src={image.src} alt={`Slide ${index + 1}`} className='swiper-slide  '/>
                <div className='card-body text-center'>
                    <h5 className='text-dark'>{image.h5}</h5>
                </div>
            </div>
        </div>

          </SwiperSlide>
          
        ))}
         <div className="custom-swiper-button-prev cprev "><i class="fa-solid fa-chevron-left"></i></div>
          <div className="custom-swiper-button-next cnxt"><i class="fa-solid fa-chevron-right"></i></div>
      </Swiper>
    </div>
  );
}

export default Aboutcomp4;