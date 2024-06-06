import React from 'react';

const Aboutcomp3 = () => {
    return (
        <>
            <div className='container-fluid m-0 p-0 col-12'>
                <div className='container-fluid p-0'>
                    <div className='row g-0'>
                    <div className='col-12 col-md-6'>
                        <img src='./assets/images/abimg2.webp' style={{ maxWidth: '100%', height: 'auto' }} className='w-100 h-auto' />
                    </div>
                    <div className='col-12 col-md-6 p-3 p-md-0 ps-md-2 p-lg-4'>
                        <h1 className='mt-5 mt-md-0 mt-lg-5 text02' style={{fontSize:'55px'}} >Giving Back</h1>
                        <h6 className='mt-3 mt-md-2 mt-lg-5' style={{fontSize:'22px'}} >
                        Even though we’re famous worldwide, Magnolia Bakery remains a neighborhood bakery at heart. We’re committed to serving our local communities by supporting small businesses, charities, schools, and bake sales. If you’re seeking a product donation for your cause, reach out to hello@magnoliabakery.com or use the link below to tell us more!
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
export default Aboutcomp3;