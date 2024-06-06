import React from 'react';
import Component2 from '../components/ordercomp2';

const Component1 = () => {


  return (
    <div className='container-fluid' style={{ minHeight: '400px' }}>
      <div className='row' style={{ minHeight: '400px' }}>
        <div className='col-12 col-md-6 d-flex align-items-center justify-content-center' style={{ background: '#bae8d4', minHeight: '400px' }}>
          <div className='text-center'>
            <h6 className='d-flex justify-content-start text1'><span className='text-decoration-underline'>Our Product</span>s&nbsp;<i className="fa-solid fa-chevron-right mt-1"></i>&nbsp;<span className='text-decoration-underline'>World-Famous Bananapudding</span></h6>
            <h1 className='fw-bold text2' style={{ color: '#013609' }}>World-Famous Banana<br />Pudding</h1>
            <p className='mt-1 text3'>
              Magnolia Bakery insiders know that our banana pudding is unparalleled,thanks to the combination of fresh bananas, vanilla wafers, and fluffyvanilla pudding. From our classic version to seasonal specialties, we’vegot enough pudding options for everyone!
            </p>
          </div>
        </div>
        <div className='col-12 col-md-6 p-0 card-content' style={{ minHeight: '400px' }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0565/9757/7916/files/220418_CL_Magnolia_10_DTC_Cups_852.jpg?v=1674247086"
            className='img-fluid'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Banana Pudding"
          />
        </div>
      </div>
      <Component2 />
    </div>
  );
}


export default Component1;






