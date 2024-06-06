import React from 'react';

const Aboutcomp1 = () => {
    return (
        <>
            <div className='container-fluid m-0 p-0 col-12'>
                <div className='border border-light'style={{ background: '#bae8d4' }}>
                    <h1 className='text-center p-5' style={{ fontSize: '70px', color: '#013609' }}>
                        About Us
                    </h1>
                </div>
                <div className='container-fluid p-0'>
                    <div className='row g-0'>
                    <div className='col-12 col-md-6'>
                        <img src='./assets/images/abimg1.webp' style={{ maxWidth: '100%', height: 'auto' }} className='w-100 h-auto' />
                    </div>
                    <div className='col-12 col-md-6 p-3 p-md-0 ps-md-2 p-lg-4'>
                        <h1 className='mt-5 mt-md-0 mt-lg-5 text02' style={{fontSize:'55px'}} >Our Story</h1>
                        <h6 className='mt-3 mt-md-2 mt-lg-5' style={{fontSize:'22px'}} >
                            Our Story Since 1996, Magnolia Bakery has been one of America’s most-cherished bakeshops and set the standard for tried-and-true desserts and baked goods. Learn more about our journey from neighborhood gem to sweet success
                        </h6>
                        <button className='btn mt-4 px-5 mt-md-2 mt-lg-5' style={{ background: '#013609', color: '#bae8d4' }}>
                            Learn More
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutcomp1;
