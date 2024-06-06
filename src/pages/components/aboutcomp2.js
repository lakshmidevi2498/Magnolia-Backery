import React from 'react';

const Aboutcomp2 = () => {
    return (
        <>
            <div className='container-fluid m-0 p-0 col-12 '>
                    <div className='row g-0' style={{background:'#bae8d4'}}>
                   
                    <div className='col-12 col-md-6 p-3 p-md-0 ps-md-2 p-lg-4 text-center'>
                        <h1 className='mt-5 mt-md-0 mt-lg-5' style={{fontSize:'55px'}} >Join Our Team</h1>
                        <h6 className='mt-3 mt-md-2 mt-lg-5' style={{fontSize:'22px'}} >
                        Hospitality is at the heart of the Magnolia Bakery experience. We believe a respectful, empathetic working environment is crucial to creating a positive team experience and keeping our guests happy. Interested in one of the sweetest gigs around? Visit our careers page to see openings at all of our U.S. locations.
                        </h6>
                        <button className='btn mt-4 px-5 mt-md-2 mt-lg-5' style={{ background: '#013609', color: '#bae8d4' }}>
                            Learn More
                        </button>
                    </div>
                    <div className='col-12 col-md-6 '>
                        <img
                            src='./assets/images/abimg3.webp'
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                    </div>
            </div>
        </>
    );
};
export default Aboutcomp2;
